import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme, selected, isDistinguish, hasDarkFont }) => {
    if (isDistinguish) return theme.colors.orange;
    if (selected) return theme.colors.darkGrey;
    if (hasDarkFont) return theme.colors.veryLightBlue;
    return theme.colors.lightGrey;
  }};
  padding: 12px;
  border-radius: 26px;

  font-size: ${({ isBig }) => (isBig ? '26px' : '20px')};
  color: ${({ theme, hasDarkFont }) => (hasDarkFont ? theme.colors.darkGrey : theme.colors.white)};
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: background-color 150ms;
  &:hover {
    background-color: ${({ theme, selected, isDistinguish }) => {
      if (isDistinguish) return theme.colors.lightOrange;
      if (!selected) return theme.colors.blue;
    }};
    color: ${({ theme, hasDarkFont }) => {
      if (hasDarkFont) return theme.colors.white;
    }};
  }
`;

export default Button;
