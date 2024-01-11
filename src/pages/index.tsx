import { useQuery } from '@tanstack/react-query';
import { getTestApi } from '@/domain/service/service.api';

export default function Index() {
  const { data } = useQuery([ 'list' ], getTestApi, {
    suspense: true,
  });

  console.log(data);

  return (
    <>
      Hello world
    </>
  );
}