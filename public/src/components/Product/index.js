import React from 'react';
import PropTypes from 'prop-types';

import { Item, Details } from './styled';
import { timeSince } from '../../utils';

const Index = ({ product }) => {
  return (
    <Item fSize={product.size}>
      <span></span>
      {product.face}
      <Details>
        <span>Price: ${product.price.toFixed(2)}</span>
        <span>Since: {timeSince(new Date(product.date))}</span>
      </Details>
    </Item>
  );
};

Index.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    size: PropTypes.number,
    price: PropTypes.number,
    date: PropTypes.date
  })
};

export default Index;
