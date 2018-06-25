import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import ErrorBoundary from '../errorBoundary';

const Layout = ({children}) => {
  return (
    <Grid>
        <Row>
          <Col xs={12}>
            <h1>
              <Link to={'/'}>Github browser</Link>
            </h1>
          </Col>
        </Row>

        <ErrorBoundary>
          {children}
        </ErrorBoundary>
    </Grid>
  );
};

export default Layout;
