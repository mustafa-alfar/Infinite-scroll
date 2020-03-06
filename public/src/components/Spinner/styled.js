import styled from '@emotion/styled';
import { jsx, css, keyframes } from '@emotion/core';

const rotation = keyframes`
from {transform: rotate(0deg);}
to {transform: rotate(359deg);}
`;
export const Container = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #999;
  border-top: 5px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 1.5s infinite ease-in-out;
  margin: 4em auto;
`;
