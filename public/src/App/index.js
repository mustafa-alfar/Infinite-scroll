import React from 'react';

import ProductsList from '../components/ProductsList';
import { Container } from './styled';

const App = () => (
  <Container>
    <header>
      <h1>Products Grid</h1>
      <p>
        Here you're sure to find a bargain on some of the finest ascii available
        to purchase. Be sure to peruse our selection of ascii faces in an
        exciting range of sizes and prices.
      </p>
    </header>
    <ProductsList />
  </Container>
);

export default App;
