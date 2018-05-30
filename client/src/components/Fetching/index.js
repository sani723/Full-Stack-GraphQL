import React from 'react';
import loadingImg from '../../assets/images/loading.gif';

const Fetching = () => (
  <div className="loader">
    <img src={loadingImg} alt="Fetching..." />
  </div>
);

export default Fetching;
