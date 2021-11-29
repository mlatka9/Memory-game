import styled from 'styled-components';
import Button from 'components/Button/Button';
import React from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    color: ${({ theme }) => theme.colors.black};
    font-size: 40px;
    font-weight: 700;
  }
  button {
    margin: 8px;
    padding: 12px 30px;
    &:first-of-type {
      margin-left: auto;
    }
  }
`;

const Header = React.memo(({ toggleIsDuringGame }) => {
  console.log('header');
  return (
    <Wrapper>
      <span>memory</span>
      <Button isDistinguish>Restart</Button>
      <Button hasDarkFont onClick={toggleIsDuringGame}>
        New Game
      </Button>
    </Wrapper>
  );
});

export default Header;
