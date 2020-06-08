import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Route as RouterRoute } from 'react-router-dom';
import Spinner from 'react-spinners/BounceLoader';
import { Box } from 'grommet';

import PageStructure from '../../Layout/PageStructure';

export default function Route({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const { isLoaded, isEmpty } = useSelector((store) => store.firebase.auth);
  const signed = !isEmpty;

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  return (
    <RouterRoute
      {...rest}
      render={(props) => {
        if (!isLoaded) {
          return (
            <Box fill align="center" justify="center">
              <Spinner color="#6699d4" />
            </Box>
          );
        }

        if (isPrivate && !signed) {
          return <Redirect to="/signin" />;
        }

        if (isPrivate) {
          return (
            <PageStructure>
              <Component {...props} />
            </PageStructure>
          );
        }

        return <Component {...props} />;
      }}
    />
  );
}

Route.propTypes = {
  component: PropTypes.func.isRequired,
  isPrivate: PropTypes.bool,
};

Route.defaultProps = {
  isPrivate: undefined,
};
