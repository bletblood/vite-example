import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom'

import './Layout.module.scss';

const Layout = () => (
  <Outlet />
)

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
