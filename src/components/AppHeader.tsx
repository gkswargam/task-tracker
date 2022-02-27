import styled from "styled-components";

const AppHeader: React.FC = () => {
  return <HeaderContainer>TASK TRACKER</HeaderContainer>;
};

const HeaderContainer = styled.div`
  color: black;
  text-align: center;
  padding: 16px;
  font-weight: bold;
`;

export default AppHeader;
