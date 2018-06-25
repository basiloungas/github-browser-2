import styled from 'styled-components';
import {Image as BootstrapImage} from 'react-bootstrap';

export const Header = styled.div`
`;

export const Payload = styled.pre`
  margin-top: 30px;
`;

export const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 20px;
`;

export const Image = styled(BootstrapImage)`
  object-fit: cover;
`;
