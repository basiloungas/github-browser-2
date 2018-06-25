import React from 'react';
import {Row, Col, PageHeader} from 'react-bootstrap';

const Page = (props) => {
  const {
    header,
    children,
  } = props;

  return (
    <Row>
      <Col xs={12}>
        <PageHeader>
          {header}
        </PageHeader>
        {children}
      </Col>
    </Row>
  );
};

export default Page;
