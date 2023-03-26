import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'zustand/shallow'

import { usePageStore } from 'store';

import './Home.module.scss';


const Home = () => {
  const [loading, data, setData, removeAllData] = usePageStore(({loading, data, setData, removeAllData}) => [loading, data, setData, removeAllData], shallow)

  useEffect(() => {
    removeAllData()
    return () => setData(10)
  }, [])

  console.log(data);
  if(loading) return <h6>Loading...</h6>
  return (
    <div className="Home" data-testid="Home">
      Home Component
    </div>
  )
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
