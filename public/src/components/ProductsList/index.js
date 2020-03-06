import React from 'react';

import Product from '../Product';
import { Container } from './styled';
import Spinner from '../Spinner';
import { useFetchWithPagination, useRandomArray } from '../../utils';
import { SET_SORT_BY, options } from '../../constants';
import Selector from '../Selector';
import Ads from '../Ads';

const Index = () => {
  const [state, dispatch] = useFetchWithPagination(`/api/products`);
  const { loading, error, success, hasNext, data, sortBy } = state;
  const ads = useRandomArray(Math.round(data.length / 10));

  const handleOnChange = value => {
    dispatch({ type: SET_SORT_BY, payload: value });
  };

  const isEmty = success && !data.length;

  if (error) return <h1>{error}</h1>;
  if (isEmty)
    return <h1>There are no items available yet, please try again later</h1>;

  if (success || loading)
    return (
      <div>
        <Selector value={sortBy} onChange={handleOnChange} options={options} />
        <Ads id={ads[0]} />
        <Container>
          {data.map((product, index) => {
            const canShowAd = index > 0 && index % 20 === 0;

            return (
              <React.Fragment key={product.id}>
                {canShowAd && <Ads id={ads[index / 10 - 1]} />}
                <Product key={product.id} product={product} />
              </React.Fragment>
            );
          })}
        </Container>
        {loading && <Spinner />}
        {!hasNext && <h1>~ end of catalogue ~</h1>}
      </div>
    );
  return <h1>Opps, Something went wrong, Please try again later</h1>;
};

export default Index;
