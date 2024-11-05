import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer"
import enrollmentsReducer from "./EnrollmentReducer"

const store = configureStore({
  reducer: {
    modulesReducer, accountReducer, assignments:assignmentsReducer, enrollments:enrollmentsReducer,
  },
});
export default store;