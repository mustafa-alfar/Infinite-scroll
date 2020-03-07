import React from 'react';
import Img from 'react-image';
import PropTypes from 'prop-types';

import { Container } from './styled';
import Spinner from '../Spinner';

const Index = ({ id }) => {
  return (
    <Container>
      <p>But first, a word from our sponsors:</p>
      <Img
        src={`/ads/?r=${id}`}
        className="ad"
        alt={`Ads, ${id}`}
        loader={<Spinner />}
        unloader={<h1>Image {id}, can't be fetching </h1>}
      />
    </Container>
  );
};

Index.propTypes = {
  id: PropTypes.number
};

export default Index;
