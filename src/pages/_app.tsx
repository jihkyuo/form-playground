import { AppLayout } from '@/layout/AppLayout';

export default function App({ children }) {

  return (
    <AppLayout>
      {children}
    </AppLayout>
  );
}