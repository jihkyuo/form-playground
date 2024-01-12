import { delay, http, HttpResponse } from 'msw';
import { apiUrl } from '@/utils/api';
import { FormBodyDto, TripDto } from '@/domain/service/service.interface';

const TRIP_LIST_KEY = 'MSW_TRIP_LIST_STORE';
const db = {
  get: (key: string) => JSON.parse(localStorage.getItem(key)),
  set: (key: string, data) => localStorage.setItem(key, JSON.stringify(data)),
};

const getTripList = http.get(`${apiUrl}/list`, async () => {
  await delay('real');
  const tripList = db.get(TRIP_LIST_KEY) ?? [];
  return HttpResponse.json(tripList);
  // return new HttpResponse(null, {
  //   status: 404,
  //   statusText: 'test server error',
  // });
});

const bodyTypeGourd = (body): body is FormBodyDto => {
  const { username, remember, password } = body as FormBodyDto;
  return (
    typeof password === 'string' &&
    typeof username === 'string' &&
    typeof remember === 'boolean'
  );
};

const postTrip = http.post(`${apiUrl}/list`, async ({ request }) => {
  const body = await request.json();
  if (bodyTypeGourd(body)) {
    const newId = String(new Date().getMilliseconds());
    const newTrip: TripDto = { id: newId, username: body.username };
    const prevTrips: TripDto[] = db.get(TRIP_LIST_KEY) ?? [];
    const mergedTrips: TripDto[] = [ ...prevTrips, newTrip ];
    db.set(TRIP_LIST_KEY, mergedTrips);

    return new HttpResponse(null, {
      status: 200,
    });
  } else {
    return new HttpResponse(JSON.stringify({
      errorMessage: '제출된 값이 잘못되었습니다.',
    }), {
      status: 400,
    });
  }
});

export const handlers = [
  getTripList,
  postTrip,
];