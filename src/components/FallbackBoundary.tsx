import { PropsWithChildren, ReactNode, Suspense } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

import { ErrorBoundary, ErrorBoundaryFallback } from '@/components/ErrorBoundary';

interface Props extends PropsWithChildren {
  errorFallback: ErrorBoundaryFallback;
  suspenseFallback: ReactNode;
}

export function FallbackBoundary({ suspenseFallback, errorFallback, children }: Props) {

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallback={errorFallback}>
          <Suspense fallback={suspenseFallback}>
            {children}
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}