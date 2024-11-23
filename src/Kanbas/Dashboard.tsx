import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import RoleProtected from "./RoleProtected";
import { addEnrollment, deleteEnrollment } from "./EnrollmentReducer";
import * as enrollmentClient from "./enrollmentsClient";

export default function Dashboard(
  { courses, userCourses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse, fetchCourses, fetchAllCourses }: {
    courses: any[]; userCourses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; fetchCourses: () => void;
    fetchAllCourses: () => void;}) 
  {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const enrollments = useSelector((state: any) => state.enrollments.enrollments);
  // const userEnrollments = enrollments.filter((enrollment: any) => enrollment.user === currentUser._id);
  // const enrolledCourseIds = userEnrollments.map((enrollment: any) => enrollment.course);
  const enrolledCourseIds = userCourses.map((course) => course._id);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const toggleEnrollments = () => setShowAllCourses((prev) => !prev);
  const coursesDisplayed = showAllCourses? courses : userCourses;
  // const handleEnrollButton = async (courseId: string) => {
  //   if (enrolledCourseIds.includes(courseId)) {
  //     dispatch(deleteEnrollment({ user: currentUser._id, course: courseId }));
  //   } else {
  //     const newEnrollment = {
  //       _id: new Date().getTime().toString(),
  //       user: currentUser._id,
  //       course: courseId,
  //     };
  //     dispatch(addEnrollment(newEnrollment));
  //   }
  // };
  const handleEnrollButton = async (courseId: string) => {
    try {
      if (enrolledCourseIds.includes(courseId)) {
        await enrollmentClient.deleteEnrollment(currentUser._id, courseId);
      } else {
        await enrollmentClient.enrollUserInCourse(currentUser._id, courseId);
      }
      fetchCourses();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const savedEnrollments = JSON.parse(localStorage.getItem("enrollments") || "[]");
    savedEnrollments.forEach((enrollment: any) => {
      if (enrollment.user === currentUser._id) {
        dispatch(addEnrollment(enrollment));
      }
    });
  }, [dispatch, currentUser._id]);
  
  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 id="wd-dashboard-title">Dashboard</h1> 
        {/* only student is allowed to enroll */}
        <RoleProtected allowedRole="STUDENT">
          <button  className="btn btn-primary float-end" onClick={toggleEnrollments}>
            Enrollments
          </button>
        </RoleProtected>
      </div>
      <hr />
      {/* only faculty is allowed to add & edit course */}
      <RoleProtected allowedRole="FACULTY">
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse} > Add </button>
          <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5><br />
      <input    value={course.name} className="form-control mb-2" 
                onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
      <textarea value={course.description} className="form-control"
                onChange={(e) => setCourse({ ...course, description: e.target.value }) }/>
      </RoleProtected>
      
      {/* all users can see */}
      <h2 id="wd-dashboard-published">Published Courses ({coursesDisplayed.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {coursesDisplayed.map((course) => (
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  {enrolledCourseIds.includes(course._id) ? (
                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                          className="wd-dashboard-course-link text-decoration-none text-dark" >
                      <img src={course.image} alt={course.name} width="100%" height={160} />
                    </Link>
                  ) : (<img src={course.image} alt={course.name} width="100%" height={160} />)}
                    <div className="card-body">
                      {enrolledCourseIds.includes(course._id) ? (
                        <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none text-dark">
                          <h5 className="wd-dashboard-course-title card-title">
                            {course.name} </h5>
                          <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                            {course.description} </p>
                        </Link>
                        ) : (
                          <div>
                            <h5 className="wd-dashboard-course-title card-title">
                            {course.name} </h5>
                            <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                              {course.description} </p> 
                          </div>)}
                      <Link to={`/Kanbas/Courses/${course._id}/Home`}>
                        <RoleProtected allowedRole="FACULTY">
                          <button className="btn btn-primary"> Go </button>
                        </RoleProtected>
                      </Link>
                      <RoleProtected allowedRole="STUDENT">
                      {enrolledCourseIds.includes(course._id) ? (
                        <Link to={`/Kanbas/Courses/${course._id}/Home`}>
                          <button className="btn btn-primary"> Go </button>
                        </Link>
                      ) : null}
                      </RoleProtected>
                      {/* only faculty is allowed to see */}
                      <RoleProtected allowedRole="FACULTY">
                      <button onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                              }} className="btn btn-danger float-end"
                              id="wd-delete-course-click">
                              Delete
                      </button>
                      <button id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end" >
                              Edit
                      </button>
                      </RoleProtected>
                      {/* enroll & unenroll button */}
                      <RoleProtected allowedRole="STUDENT">
                      <button onClick={() => handleEnrollButton(course._id)}
                              className={`btn ${enrolledCourseIds.includes(course._id) ? "btn-danger" : "btn-warning"} me-2 float-end`}
                              id="wd-unenroll-course-click">
                              {enrolledCourseIds.includes(course._id) ? "Unenroll" : "Enroll"}
                      </button>
                      </RoleProtected>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>);}
