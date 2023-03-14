import React from 'react';

import GridLoader from 'react-spinners/GridLoader';

import { Spinner } from './Loader.styled';

const Loader = () => {
  return (
    <Spinner>
      <GridLoader color=" rgb(255, 107, 8)" aria-label="Loading Spinner" size={50} />
    </Spinner>
  );
};

export { Loader };
