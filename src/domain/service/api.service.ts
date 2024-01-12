import { Api } from '@/utils/api';
import { FormBodyDto, TripDto } from '@/domain/service/service.interface';

export const getTestApi = async () => {
  return (await Api.get<TripDto[]>('/list')).data;
};

export const postTestApi = async (body: FormBodyDto) => {
  return (await Api.post('/list', body));
};