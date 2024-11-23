import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

type Assignment = {
  _id: string;
  title: string;
  course: string;
  status?: string;
  startDate?: string;
  startTime?: string;
  dueDate?: string;
  dueTime?: string;
  points?: number;
};

const initialState = {
  assignments: [] as Assignment[] ,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      setAssignments: (state, action) => {
        state.assignments = action.payload;
      },
      addAssignment: (state, { payload: Assignment }) => {
        const newAssignment: any = {
          _id: new Date().getTime().toString(),
          title: Assignment.title,
          course: Assignment.course,                                                                                          
          status: Assignment.status || "Not available until",
          startDate: Assignment.startDate || "May 6", 
          startTime: Assignment.startTime || "12:00am",
          dueDate: Assignment.dueDate || "May 13",
          dueTime: Assignment.dueTime || "23:59pm",
          points: Assignment.points || "100"
        };
        state.assignments = [...state.assignments, newAssignment] as any;
      },
      deleteAssignment: (state, { payload: assignmentId }) => {
        state.assignments = state.assignments.filter(
          (a: any) => a._id !== assignmentId);
      },
      updateAssignment: (state, { payload: assignment }) => {
        state.assignments = state.assignments.map((a: any) =>
          a._id === assignment._id ? assignment : a
        ) as any;
      },
      editAssignment: (state, { payload: assignmentId }) => {
        state.assignments = state.assignments.map((a: any) =>
          a._id === assignmentId ? { ...a, editing: true } : a
        ) as any;
      },
    },
  });
  export const { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignments } =
    assignmentsSlice.actions;
  export type {Assignment};
  export default assignmentsSlice.reducer;