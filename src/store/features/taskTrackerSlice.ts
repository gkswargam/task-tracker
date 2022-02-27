import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { Task } from "../../models/Task";

export interface TaskTrackerState {
  incompleteTasks: Task[];
  completedTasks: Task[];
}

const initialState: TaskTrackerState = {
  incompleteTasks: [
    {
      taskId: "task1",
      taskDescription: "task description 1",
      isTaskDone: false,
    },
    {
      taskId: "task2",
      taskDescription: "task description 2",
      isTaskDone: false,
    },
    {
      taskId: "task3",
      taskDescription: "task description 3",
      isTaskDone: false,
    },
    {
      taskId: "task4",
      taskDescription: "task description 4",
      isTaskDone: false,
    },
  ],
  completedTasks: [],
};

export const taskTrackerSlice = createSlice({
  name: "taskTracker",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.incompleteTasks = [
        ...state.incompleteTasks,
        {
          taskId: uuidv4(),
          taskDescription: action.payload,
          isTaskDone: false,
        },
      ];
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.incompleteTasks = state.incompleteTasks.filter(
        (task) => task.taskId !== action.payload
      );
    },
    completeTask: (state, action: PayloadAction<string>) => {
      const updatedIncompleteTaskList: Task[] = state.incompleteTasks.filter(
        (task) => task.taskId !== action.payload
      );

      const updatedCompletedTaskList: Task[] = state.incompleteTasks.filter(
        (task) => task.taskId === action.payload
      );

      updatedCompletedTaskList.forEach((task) => (task.isTaskDone = true));

      state.incompleteTasks = updatedIncompleteTaskList;
      state.completedTasks = [
        ...state.completedTasks,
        ...updatedCompletedTaskList,
      ];
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      state.incompleteTasks = state.incompleteTasks.map((task) =>
        task.taskId !== action.payload.taskId ? task : action.payload
      );
    },
  },
});

export const { addTask, deleteTask, completeTask, updateTask } =
  taskTrackerSlice.actions;

export default taskTrackerSlice.reducer;
