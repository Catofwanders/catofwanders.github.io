import styled from 'styled-components';

export const CardWrap = styled.div`
  width: ${({ width }) => width + '%' || '100%'};
  border: 1px solid #ccc;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
