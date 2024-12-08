import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import RoleProtected from "./RoleProtected";
import { addEnrollment, deleteEnrollment } from "./EnrollmentReducer";
import * as enrollmentClient from "./enrollmentsClient";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse, fetchCourses, enrolling, setEnrolling, updateEnrollment }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; fetchCourses: () => void;
    enrolling: boolean; setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void }) 
  {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const handleEnrollButton = async (courseId: string) => {
    try {
      const theCourse = courses.find(c => c._id === courseId);
      if (theCourse && theCourse.enrolled) {
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
          <button className="btn btn-primary float-end"
                  onClick={() => setEnrolling(!enrolling)}>
            {enrolling ? "My Courses" : "All Courses"}
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
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((c) => (
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  {c.enrolled ? (
                    <Link to={`/Kanbas/Courses/${c._id}/Home`}
                          className="wd-dashboard-course-link text-decoration-none text-dark" >
                      <img src={c.image} alt={c.name} width="100%" height={160} />
                    </Link>
                  ) : (<img src={c.image} alt={c.name} width="100%" height={160} />)}
                    <div className="card-body">
                      {c.enrolled ? (
                        <Link to={`/Kanbas/Courses/${c._id}/Home`} className="text-decoration-none text-dark">
                          <h5 className="wd-dashboard-course-title card-title">
                            {c.name} </h5>
                          <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                            {c.description} </p>
                        </Link>
                        ) : (
                          <div>
                            <h5 className="wd-dashboard-course-title card-title">
                            {c.name} </h5>
                            <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                              {c.description} </p> 
                          </div>)}
                      <Link to={`/Kanbas/Courses/${c._id}/Home`}>
                        <RoleProtected allowedRole="FACULTY">
                          <button className="btn btn-primary"> Go </button>
                        </RoleProtected>
                      </Link>
                      <RoleProtected allowedRole="STUDENT">
                      {c.enrolled ? (
                        <Link to={`/Kanbas/Courses/${c._id}/Home`}>
                          <button className="btn btn-primary"> Go </button>
                        </Link>
                      ) : null}
                      </RoleProtected>
                      {/* only faculty is allowed to see */}
                      <RoleProtected allowedRole="FACULTY">
                      <button onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(c._id);
                              }} className="btn btn-danger float-end"
                              id="wd-delete-course-click">
                              Delete
                      </button>
                      <button id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(c);
                              }}
                              className="btn btn-warning me-2 float-end" >
                              Edit
                      </button>
                      </RoleProtected>
                      {/* enroll & unenroll button */}
                      <RoleProtected allowedRole="STUDENT">
                      {enrolling && (
                        <button  onClick={(event) => {
                                  event.preventDefault();
                                  updateEnrollment(c._id, !c.enrolled);
                                 }}
                          className={`btn ${ c.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                          {c.enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}
                      </RoleProtected>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>);}
