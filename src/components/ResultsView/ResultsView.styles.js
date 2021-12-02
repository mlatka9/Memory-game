import styled from 'styled-components';
import { Wrapper } from 'components/StatCard/StatCard.styles';

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 48px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black};
    margin: 0px;
    text-align: center;
  }
  p {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.grey};
    margin: 40px;
    text-align: center;
  }
  ${Wrapper} {
    flex-basis: unset;
    margin: 10px 0;
    &::after {
      content: none;
    }
    &::before {
      content: none;
    }
  }
  ${Wrapper} {
    flex-basis: unset;
  }
  div {
    display: flex;
    margin-top: 50px;
    gap: 10px;
    > button {
      width: 100%;
      padding: 18px 15px;
      border-radius: 50px;
    }
  }
`;
