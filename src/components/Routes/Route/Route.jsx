import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route as RouterRoute } from 'react-router-dom';
import Spinner from 'react-spinners/BounceLoader';
import { Box } from 'grommet';

import PageStructure from '../../Layout/PageStructure';
import { UserContext } from '../../../contexts/userContext';

export default function Route({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const { userData, loadingUser } = useContext(UserContext);
  const signed = userData;

  if (signed && !isPrivate) {
    return <Redirect to="/" />;
  }

  return (
    <RouterRoute
      {...rest}
      render={(props) => {
        if (loadingUser) {
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
