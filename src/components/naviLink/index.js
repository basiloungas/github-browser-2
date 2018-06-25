import React from 'react';
import {Glyphicon, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NaviLink = ({link, text}) => {
  return (
    <Alert bsStyle="warning">
      <Link to={link}>
        <Glyphicon glyph="menu-left" />
        {text}
      </Link>
    </Alert>
  );
}

export default NaviLink;
