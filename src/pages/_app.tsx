import { AppLayout } from '@/layout/AppLayout';
import { FallbackBoundary } from '@/components/FallbackBoundary';
import { Button, Result } from 'antd';

export default function App({ children }) {

  return (
    <AppLayout>
      <FallbackBoundary
        errorFallback={({ error }) => (
          <Result
            status={'error'}
            title={'치명적 에러 발생'}
            subTitle={`${error.name}: ${error.message}`}
            extra={<Button type="primary" onClick={window.location.reload}>새로고침</Button>}
          />
        )}
        suspenseFallback={'로딩'}>
        {children}
      </FallbackBoundary>
    </AppLayout>
  );
}