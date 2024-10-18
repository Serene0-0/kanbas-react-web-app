import AssignmentControls from "./AssignmentControls";
import {BsGripVertical} from 'react-icons/bs';
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";


export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(assignment => assignment.course === cid);
  return (
    <div>
      <AssignmentControls /><br /><br /><br /><br />
        <ul id="wd-assignments" className="list-group rounded-0">
          <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> 
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
              <AssignmentControlButtons />
            </div>
            
            <ul className="wd-assignments list-group rounded-0">
              {courseAssignments.map((assignment) => {
                const status = assignment.status || "Not available until"
                const startDate = assignment.startDate || "Not specified";
                const startTime = assignment.startTime || "12:00 am";
                const dueDate = assignment.dueDate || "Not specified";
                const dueTime = assignment.dueTime || "23:59pm";
                const points = assignment.points || "100";
                return (
                <li key={assignment._id} className="wd-assignments list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdOutlineAssignment className="me-3 fs-3" />
                    <div>
                      <Link className="wd-assignment-link"
                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                        {assignment.title}
                      </Link>
                    <p>
                      Multiple Modules | <strong>{status} </strong> {startDate} at {startTime} |<br/> 
                      <strong> Due</strong> {dueDate} at {dueTime} | {points} pts
                    </p>
                    </div>
                  </div>
                  <LessonControlButtons />
                </li> 
                );  
              })}
            </ul>
          </li>
        </ul>
    </div>
  );}  