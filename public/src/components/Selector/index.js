import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styled';

const Index = ({ options, onChange, value }) => {
  return (
    <Container>
      <select onChange={e => onChange(e.target.value)} value={value}>
        <option value="" disabled>
          Sort By
        </option>
        {options.map(option => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

Index.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      id: PropTypes.string
    })
  )
};

export default Index;
