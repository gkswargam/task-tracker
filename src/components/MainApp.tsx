import React from "react";
import styled from "styled-components";

import AppHeader from "./AppHeader";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const MainApp: React.FC = () => {
  return (
    <AppContainer>
      <AppHeader />
      <TaskForm />
      <TaskList />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px;
`;

export default MainApp;
