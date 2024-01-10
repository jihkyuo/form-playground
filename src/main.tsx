import React from 'react';
import ReactDOM from 'react-dom/client';
import FileRoutes from './routes';
import { worker } from './mocks/browser';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');
  return worker.start({ onUnhandledRequest: 'bypass' });
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <FileRoutes />
    </React.StrictMode>,
  );
});
