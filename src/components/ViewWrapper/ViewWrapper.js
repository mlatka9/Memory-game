import styled from 'styled-components';

const ViewWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  border-radius: 20px;
  width: 100%;
  max-width: 650px;
`;

export default ViewWrapper;
