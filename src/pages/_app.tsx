import { FallbackBoundary } from '@/components/FallbackBoundary';

export default function App({ children }) {

  return (
    <FallbackBoundary errorFallback={() => <>err</>} suspenseFallback={'로딩'}>
      <div>App</div>
      {children}
    </FallbackBoundary>
  );
}