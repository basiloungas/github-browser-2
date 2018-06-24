import styled, { keyframes } from 'styled-components';

const ldsDualRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;

  :after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid black;
    border-color: black transparent black transparent;
    animation: ${ldsDualRing} 1.2s linear infinite;
  }
`;

export const Wrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;

  ${Loader} {
    position: absolute;
    top:50%;
    left:50%;
    margin-top: -32px;
    margin-left: -32px;
  }
`
