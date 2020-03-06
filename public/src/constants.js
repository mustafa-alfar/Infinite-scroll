import { uuid } from 'uuidv4';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const HIT_END_OF_PAGE = 'HIT_END_OF_PAGE';
export const SET_CACHED = 'SET_CACHED';
export const POPULATE = 'POPULATE';
export const SET_SORT_BY = 'SET_SORT_BY';
export const options = [
  { value: 'size', label: 'Size', id: uuid() },
  { value: 'price', label: 'Price', id: uuid() },
  { value: 'id', label: 'Id', id: uuid() }
];
