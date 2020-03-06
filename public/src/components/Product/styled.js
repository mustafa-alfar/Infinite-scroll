import styled from '@emotion/styled';

export const Item = styled.li`
  font-size: ${({ fSize }) => fSize && `${fSize}px`};
  background-color: #d0e2ec;
  background-color: #f8f8f8;
  padding: 20px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  transition: transform 0.3s, filter 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
    filter: drop-shadow(2px 4px 6px #ddd);
  }
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
`;
