import React from 'react';
import {branch, renderComponent} from 'recompose';

import {Wrapper, Loader} from './styled';

const LoaderComponent = () => {
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  );
}

export const showLoaderIfLoading = isLoading => {
  return branch(
    isLoading,
    renderComponent(LoaderComponent)
  );
};

export default LoaderComponent;
