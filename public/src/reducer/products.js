import {
  LOADING,
  SUCCESS,
  ERROR,
  HIT_END_OF_PAGE,
  POPULATE,
  SET_CACHED,
  SET_SORT_BY
} from '../constants';

export const initialState = {
  loading: false,
  error: null,
  success: false,
  data: [],
  cachedData: [],
  page: 1,
  hasNext: true,
  hitEndOfPage: true,
  sortBy: ''
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case HIT_END_OF_PAGE:
      return {
        ...state,
        hitEndOfPage: true
      };
    case LOADING:
      return {
        ...state,
        data: state.data,
        loading: true,
        error: null,
        success: null
      };
    case ERROR:
      return {
        ...initialState,
        data: state.data,
        error: action.payload
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        page: payload.page,
        data: [...state.data, ...payload.newData],
        // this better to be given from the back-end I will hardcodedd it.
        hasNext: state.data.length < 500,
        hitEndOfPage: false
      };
    case SET_CACHED:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        page: payload.page,
        cachedData: payload.newData,
        hasNext: state.data.length < 500,
        hitEndOfPage: false
      };
    case POPULATE:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        data: [...state.data, ...payload],
        cachedData: [],
        hasNext: state.data.length < 500,
        hitEndOfPage: false
      };

    case SET_SORT_BY:
      return {
        ...initialState,
        sortBy: payload
      };

    default:
      return initialState;
  }
}
