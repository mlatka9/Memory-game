import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    color: ${({ theme }) => theme.colors.black};
    font-size: 40px;
    font-weight: 700;
  }
  button {
    margin-left: 8px;
    padding: 12px 30px;
    &:first-of-type {
      margin-left: auto;
    }
    &:first-of-type,
    &:nth-of-type(2) {
      @media (max-width: 600px) {
        display: none;
      }
    }
    &:last-of-type {
      display: none;
      @media (max-width: 600px) {
        display: block;
      }
    }
  }
`;
