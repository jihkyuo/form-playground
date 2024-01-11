import { delay, http, HttpResponse } from 'msw';
import { apiUrl } from '@/utils/api';

const getMockTest = http.get(`${apiUrl}/list`, async () => {
  await delay('real');
  return HttpResponse.json({ test: 'test' });
  // return new HttpResponse(null, {
  //   status: 404,
  //   statusText: 'test server error',
  // });
});

export const handlers = [
  getMockTest,
];