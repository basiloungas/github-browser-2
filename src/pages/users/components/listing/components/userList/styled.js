import styled from 'styled-components';
import {
  Col,
  Button,
  Image as BootstrapImage,
} from 'react-bootstrap';

export const Box = styled(Col)`
  margin-bottom: 30px;
`;

export const ListWrapper = styled.div`
  padding: 10px 0;
  margin: 0 -10px;
`;

export const Image = styled(BootstrapImage)`
  object-fit: cover;
  width: 100%;
  height: 300px; /* optional, but in my case it was good */
`;

export const LoadButton = styled(Button)`
  width: 100%;
  font-size: 1.5em;
  padding: 10px;
`;
