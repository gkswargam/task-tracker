import styled from "styled-components";
import { useSelector } from "react-redux";

import SingleTask from "./SingleTask";
import { RootState } from "../store/store";

const TaskList: React.FC = () => {
  const incompleteTasks = useSelector(
    (state: RootState) => state.taskTracker.incompleteTasks
  );

  const completedTasks = useSelector(
    (state: RootState) => state.taskTracker.completedTasks
  );

  return (
    <TaskListContainer>
      <IncompleteTaskListContainer>
        <TaskListHeader>Incomplete Tasks</TaskListHeader>
        {incompleteTasks.map((task) => (
          <SingleTask key={task.taskId} task={task} />
        ))}
      </IncompleteTaskListContainer>
      <CompletedTaskListContainer>
        <TaskListHeader>Completed Tasks</TaskListHeader>
        {completedTasks.map((task) => (
          <SingleTask key={task.taskId} task={task} />
        ))}
      </CompletedTaskListContainer>
    </TaskListContainer>
  );
};

const TaskListContainer = styled.div`
  margin: 16px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const IncompleteTaskListContainer = styled.div`
  height: min-content;
  width: 50%;
  margin: 8px;
  background-color: #f4f6f7;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CompletedTaskListContainer = styled(IncompleteTaskListContainer)``;

const TaskListHeader = styled.h3`
  text-align: center;
  margin: 12px;
`;

export default TaskList;
