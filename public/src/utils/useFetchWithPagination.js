import { useReducer, useState, useEffect, useRef } from 'react';

import { LOADING, SUCCESS, ERROR } from '../constants';
import { initialState, reducer } from '../reducer';

export default function useFetchWithPagination(url) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, loading, page, hasNext } = state;
  const cachedData = useRef(data);
  const [canFetch, setCanFetch] = useState(true);
  const [limit, setLimit] = useState(200);

  useEffect(() => {
    if (!loading && canFetch && hasNext)
      fetchData(`${url}?_page=${page + 1}&_limit=${limit}`);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [canFetch]);

  const fetchData = async url => {
    dispatch({ type: LOADING });
    try {
      const res = await fetch(url);
      const json = await res.json();

      cachedData.current.push(...json);

      // populate newwData array and increment page counter after ensuring that we did fetch the last page's list.
      dispatch({
        type: SUCCESS,
        payload: { data: cachedData.current, page: page + 1 }
      });
      // make canFetch to false to re-fire the useEffect after fetching data when the user attached the end of the page again.
      // setPage(page + 1);
      setCanFetch(false);
    } catch (err) {
      dispatch({ type: ERROR, payload: err.message });
    }
  };

  function handleScroll() {
    const endOfPage =
      document.documentElement.offsetHeight -
        (window.innerHeight + document.documentElement.scrollTop) <
      300;
    if (endOfPage) setCanFetch(endOfPage);
  }

  return state;
}
