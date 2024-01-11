import { Api } from '@/utils/api';

export const getTestApi = async () => {
  return (await Api.get('/list'));
};