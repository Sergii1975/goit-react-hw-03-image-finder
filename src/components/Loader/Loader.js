import React from 'react';
import { Watch } from  'react-loader-spinner'
import { LoadWrapper } from './Loader.styled'

 const Loader = () => {
  return (
    <LoadWrapper>
          <Watch
  height="80"
  width="80"
  radius="48"
  color="#4fa94d"
  ariaLabel="watch-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>
    </LoadWrapper>
  );
};

export default Loader
