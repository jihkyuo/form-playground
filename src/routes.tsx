import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/**
 * File System 기반 라우터
 */

type RouteModule = Record<string, { [key: string]: any }>

const PRESERVED: RouteModule = import.meta.glob('/src/pages/(_app|404).(js|jsx|ts|tsx)', { eager: true });
const ROUTES: RouteModule = import.meta.glob('/src/pages/**/[a-z[]*.(js|jsx|ts|tsx)', { eager: true });

const preserve = Object.keys(PRESERVED).reduce((p, file) => {
  const key = file.replace(/\/src\/pages\/|\.(js|jsx|ts|tsx)$/g, '');
  return { ...p, [key]: PRESERVED[file].default };
}, {});

const routes = Object.keys(ROUTES).map((route) => {
  const path = route.replace(/\/src\/pages|index|\.(js|jsx|ts|tsx)$/g, '')
    .replace(/\[\.{3}[^/]+\]/, '*')
    .replace(/\[([^/]+)\]/g, ':$1');

  return { path, component: ROUTES[route].default };
});

export default function FileRoutes() {
  const App = preserve?.['_app'] || Fragment;
  const NotFound = preserve?.['404'] || Fragment;

  return (
    <BrowserRouter>
      <App>
        <Routes>
          {routes.map(({ path, component: Component = Fragment }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}
