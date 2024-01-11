import { ErrorBoundary } from '@/components/ErrorBoundary';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { Suspense } from 'react';

export default function App({ children }) {

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallback={({ error, resetErrorBoundary }) => {
            console.log('boundary errr', error);
            if (isAxiosError(error)) {
              switch (error.response.status) {
              case 500 :
                return <>
                  500 err
                  <button onClick={resetErrorBoundary}>재시도</button>
                </>;
              case 400 :
                return <>400 err</>;
              default:
                return <>unknowned err</>;
              }
            }
          }}>
          <Suspense fallback={<>로딩중...</>}>
            <div>App</div>
            {children}
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}