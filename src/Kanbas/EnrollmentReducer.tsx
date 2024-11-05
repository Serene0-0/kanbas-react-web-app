import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";

type Enrollment = {
  _id: string
  user: string;
  course: string;
};

const initialState = {
  enrollments : enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, { payload }: { payload: Enrollment }) => {
      const newEnrollment: any = {
        _id: new Date().getTime().toString(),
        user: payload.user,
        course: payload.course,                                                                                          
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    deleteEnrollment: (state, { payload }: { payload: { user: string; course: string } }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => !(enrollment.user === payload.user && enrollment.course === payload.course)
      );
    },
    resetEnrollments: (state) => {
      state.enrollments = enrollments;
    },
  },
});

export const { addEnrollment, deleteEnrollment,  resetEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;