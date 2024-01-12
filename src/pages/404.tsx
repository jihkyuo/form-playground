import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Result
      status={'404'}
      title={'잘못된 경로 입니다.'}
      subTitle={'Sorry, the page you visited does not exist.'}
      extra={<Button type={'primary'} onClick={() => navigate('form')}>Back Home</Button>}
    />
  );
}