import { useParams, Link, useNavigate } from "react-router-dom";
import * as assignmentsClient from "./client";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Assignment, addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isNewAssignment = aid === "newAssignment";
  const assignment = useSelector((state: any) => 
    state.assignments.assignments.find((assignment: any) => assignment._id === aid)
  );

  const [title, setTitle] = useState(assignment ? assignment.title : "New Assignment");
  const [points, setPoints] = useState(assignment ? assignment.points : 100);
  const [dueDate, setDueDate] = useState(assignment ? assignment.dueDate : "");
  const [startDate, setStartDate] = useState(assignment ? assignment.startDate : "");
  const [endDate, setEndDate] = useState(assignment ? assignment.endDate : "");
  
  const handleSave = async () => {
    if (!cid) {
      console.error("Course ID is missing.");
      return;
    }
    if (isNewAssignment) {
      const newAssignment: Assignment = {
        _id: new Date().getTime().toString(),
        title,
        course: cid
      };
      try {
        const createdAssignment = await assignmentsClient.createAssignmentForCourse(
          cid,
          newAssignment
        );
        dispatch(addAssignment(createdAssignment));
      } catch (error) {
        console.error("Failed to create assignment:", error);
      }
    } else {
      const updatedAssignment: Assignment = {
        _id: aid!,
        title,
        course: cid,
      };
      try {
        await assignmentsClient.updateAssignment(updatedAssignment);
        dispatch(updateAssignment(updatedAssignment));
      } catch (error) {
        console.error("Failed to update assignment:", error);
      }
    }

    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  if (!assignment && !isNewAssignment) {
    return <h2>Assignment not found</h2>;
  }
  
  return (
      <div id="wd-assignments-editor" className="container">
        <div className="row">
          <div className="col-11">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-11">
            <textarea id="wd-description" className="form-control" rows={5}>
            The assignment is available online Submit a link to the landing page of your Web application running on Netlify. 
            The landing page should include the following: 
            Your full name and section Links to each of the lab assignments Link to the Kanbas application 
            Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
          </div>
        </div>
        <br />

        <div className="row mb-2">
        <label htmlFor="wd-points" className="col-sm-3 col-form-label text-end ms-1">
          Points </label>
        <div className="col-sm-8">
          <input id="wd-points" value={points} onChange={(e) => setPoints(Number(e.target.value))} className="form-control float-end" />
        </div> </div>

        <div className="row mb-2">
        <label htmlFor="wd-assign-to" className="col-sm-3 col-form-label text-end ms-1">
          Assign 
        </label>
          <div className="col-sm-8 p-3 border rounded">
            {/* <label htmlFor="wd-assign-to" className="col-sm-3 col-form-label fw-bold">
              Assign to
            </label>
            <input id="wd-points" value="Everyone" className="form-control float-end mb-4" />
            <br /> */}

            <label htmlFor="wd-due-date" className="col-sm-3 col-form-label fw-bold">
              Due 
            </label><br />
            <input type="date" id="wd-due-date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="form-control" />
            <br />

            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="wd-available-from" className="col-form-label fw-bold">
                  Available from
                </label>
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-available-until" className="col-form-label fw-bold">
                  Until
                </label>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-6">
                <input type="date" id="wd-available-from" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="form-control" />
              </div>  
              <div className="col-md-6">
              <input type="date" id="wd-available-until" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="form-control" />        
              </div>  
            </div>
            </div>
            </div>
            <br />

            <div className="row mb-2">
              <div className="col-sm-12 d-flex justify-content-end">
                <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
                <button onClick={handleSave} className="btn btn-danger">Save</button>            
          </div>
        </div>
      </div>
      
  );
}