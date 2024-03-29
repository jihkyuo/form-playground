import { useQuery } from '@tanstack/react-query';

import { getTestApi } from '@/domain/service/api.service';

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