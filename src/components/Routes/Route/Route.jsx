import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route as RouterRoute } from 'react-router-dom';

export default function Route({
  notFound,
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = true;

  if (isPrivate && !signed) {
    return <Redirect to="/signin" />;
  }

  return <RouterRoute {...rest} render={(props) => <Component {...props} />} />;
}

Route.propTypes = {
  component: PropTypes.func.isRequired,
  isPrivate: PropTypes.bool,
  notFound: PropTypes.bool,
};

Route.defaultProps = {
  isPrivate: undefined,
  notFound: undefined,
};
