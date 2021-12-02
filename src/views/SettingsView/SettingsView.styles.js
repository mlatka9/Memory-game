import styled from 'styled-components';
import ViewWrapper from 'components/ViewWrapper/ViewWrapper';
import Button from 'components/Button/Button';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  h1 {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 70px;
  }
  p {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 700;
    margin: 0;
    margin-bottom: 16px;
  }
  button {
    margin-bottom: 33px;
  }
  @media (max-width: 800px) {
    padding: 30px;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  @media (max-width: 600px) {
    gap: 10px;
  }
  ${Button} {
    width: 100%;
  }
`;

export const SettingsViewWrapper = styled(ViewWrapper)`
  display: flex;
  flex-direction: column;
`;
