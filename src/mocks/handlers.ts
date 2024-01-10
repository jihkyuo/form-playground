import { http, HttpResponse } from 'msw';

const getMockTest = http.get('/list', (info) => {
  console.log('GET INFO', info);
  return HttpResponse.json({ test: 'test' });
});

export const handlers = [
  getMockTest,
];