import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import FileRoutes from '@/routes';
import { GlobalStyles } from '@/GlobalStyles';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('@/mocks/browser');
  return worker.start({ onUnhandledRequest: 'bypass' });
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
    },
  },
});

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <FileRoutes />
      </QueryClientProvider>
    </React.StrictMode>,
  );
});
