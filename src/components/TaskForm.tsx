import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { addTask } from "../store/features/taskTrackerSlice";

const TaskForm: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const dispatch = useDispatch();

  const addTaskToState = () => {
    dispatch(addTask(task));
    setTask("");
  };

  return (
    <FormContainer>
      <TaskInputField
        type="text"
        placeholder="Please enter task description"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <AddTaskButton onClick={addTaskToState}>Add Task</AddTaskButton>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TaskInputField = styled.input`
  width: 70vw;
  padding: 16px;
  border: none;
  border-radius: 8px;
  margin-right: 8px;

  :focus {
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.25);
    outline: none;
  }
`;

const AddTaskButton = styled.button`
  background-color: #fbb803;
  color: black;
  padding: 16px;
  border: none;
  border-radius: 8px;
  opacity: 0.5;

  :hover {
    opacity: 1;
  }
`;

export default TaskForm;
