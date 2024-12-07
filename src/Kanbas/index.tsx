import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";
import * as db from "./Database";
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { addEnrollment } from "./EnrollmentReducer";

export default function Kanbas() {
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const dispatch = useDispatch();
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: new Date().getTime().toString(), name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description", image: "/images/reactjs.png"
  });
  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setCourses(prevCourses => [...prevCourses, newCourse]);
    if (currentUser && currentUser.role === "FACULTY") {
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        user: currentUser._id,
        course: newCourse._id,
      };
      console.log("Adding new enrollment:", newEnrollment);
      dispatch(addEnrollment(newEnrollment));
    }

  };
  
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  
  return (
    <div id="wd-kanbas">
            <KanbasNavigation />        
          <div  className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={<ProtectedRoute>
              <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
              </ProtectedRoute> } />
              <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses}/></ProtectedRoute>} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>  
          </div>  
    </div>
);}

