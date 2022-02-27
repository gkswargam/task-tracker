import React from "react";
import styled from "styled-components";

import MainApp from "./components/MainApp";

const App: React.FC = () => {
  return (
    <AppContainer>
      <MainApp />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0e0b6;
`;

export default App;
