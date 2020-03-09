import { useReducer, useEffect } from 'react';

import {
  LOADING,
  SUCCESS,
  ERROR,
  HIT_END_OF_PAGE,
  SET_CACHED,
  POPULATE
} from '../constants';
import { initialState, reducer } from '../reducer/products';

export default function useFetchWithPagination(url) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    loading,
    success,
    page,
    hasNext,
    hitEndOfPage,
    cachedData,
    sortBy,
    data
  } = state;

  const generateUrl = (url, page) =>
    `${url}?_page=${page}&_sort=${sortBy}&_limit=10`;

  //  Fetch for display
  useEffect(() => {
    const canFetch = !loading && hitEndOfPage && hasNext;
    if (canFetch) {
      if (!!cachedData.length) {
        dispatch({ type: POPULATE, payload: cachedData });
      } else {
        fetchData(generateUrl(url, page));
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hitEndOfPage]);

  // Fetch for caching
  useEffect(() => {
    const canFetchForCaching =
      !loading && success && hasNext && !cachedData.length;
    if (canFetchForCaching) fetchData(generateUrl(url, page), true);
  }, [loading, cachedData, data]);

  const fetchData = async (url, isForCaching) => {
    dispatch({ type: LOADING });
    try {
      const res = await fetch(url);
      const json = await res.json();

      if (isForCaching) {
        dispatch({
          type: SET_CACHED,
          payload: { newData: json, page: page + 1 }
        });
      } else {
        dispatch({
          type: SUCCESS,
          payload: { newData: json, page: page + 1 }
        });
      }
    } catch (err) {
      dispatch({ type: ERROR, payload: err.message });
    }
  };

  function handleScroll() {
    const endOfPage =
      document.documentElement.offsetHeight -
        (window.innerHeight + document.documentElement.scrollTop) <
      300;
    if (endOfPage) dispatch({ type: HIT_END_OF_PAGE });
  }

  return [state, dispatch];
}
