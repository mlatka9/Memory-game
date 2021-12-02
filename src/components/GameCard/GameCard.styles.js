import styled from 'styled-components';

export const CardWrapper = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, status }) => {
    if (status === 'isGuessed') return theme.colors.lightGrey;
    if (status === 'isCurrent') return theme.colors.orange;
    return theme.colors.darkGrey;
  }};
  border-radius: 50%;
  border: none;
  font-size: 56px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background-color 150ms;
  @media (max-width: 800px) {
    font-size: 44px;
  }
  &:hover {
    background-color: ${({ theme, status }) => !status && theme.colors.blue};
  }
`;
