import React, { useState } from "react";
import styled from "styled-components";
import { MdEdit, MdDelete, MdDone, MdDoneOutline } from "react-icons/md";
import { useDispatch } from "react-redux";

import { Task } from "../models/Task";
import {
  completeTask,
  deleteTask,
  updateTask,
} from "../store/features/taskTrackerSlice";

interface Props {
  task: Task;
}
const SingleTask: React.FC<Props> = ({ task }) => {
  const [editStatus, setEditStatus] = useState<Boolean>(false);
  const [editText, setEditText] = useState<string>("");
  const dispatch = useDispatch();

  return (
    <TaskContainer>
      {task.isTaskDone ? (
        <TaskDescriptionStriked>{task.taskDescription}</TaskDescriptionStriked>
      ) : (
        <>
          {editStatus ? (
            <>
              <TaskInputField
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <TaskEditDone
                onClick={() => {
                  setEditStatus(false);
                  dispatch(updateTask({ ...task, taskDescription: editText }));
                }}
              >
                <MdDoneOutline />
              </TaskEditDone>
            </>
          ) : (
            <>
              <TaskDescription>{task.taskDescription}</TaskDescription>
              <TaskOperations>
                <TaskEdit
                  onClick={() => {
                    setEditStatus(true);
                    setEditText(task.taskDescription);
                  }}
                >
                  <MdEdit />
                </TaskEdit>
                <TaskDelete onClick={() => dispatch(deleteTask(task.taskId))}>
                  <MdDelete />
                </TaskDelete>
                <TaskDone onClick={() => dispatch(completeTask(task.taskId))}>
                  <MdDone />
                </TaskDone>
              </TaskOperations>
            </>
          )}
        </>
      )}
    </TaskContainer>
  );
};

const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fbb803;
  margin: 8px;
`;

const TaskDescription = styled.div`
  overflow: scroll;
  margin-right: 8px;
`;

const TaskDescriptionStriked = styled(TaskDescription)`
  text-decoration: line-through;
`;

const TaskOperations = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const TaskEdit = styled.div`
  margin: 0 5px;
`;

const TaskDelete = styled(TaskEdit)``;

const TaskDone = styled(TaskEdit)``;

const TaskEditDone = styled(TaskEdit)``;

const TaskInputField = styled.input`
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 8px;
  margin-right: 8px;
`;

export default SingleTask;
