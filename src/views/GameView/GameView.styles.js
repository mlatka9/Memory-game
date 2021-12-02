import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 50px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 600px) {
    padding: 20px;
  }
`;
