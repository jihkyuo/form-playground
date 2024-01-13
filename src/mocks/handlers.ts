import * as tripHandlers from './api/trip.api'

export const msw_db = {
  get: (key: string) => JSON.parse(localStorage.getItem(key)),
  set: (key: string, data) => localStorage.setItem(key, JSON.stringify(data)),
};

export const handlers = [
  ...Object.values(tripHandlers)
]