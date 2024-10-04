import AssignmentControls from "./AssignmentControls";
import {BsGripVertical} from 'react-icons/bs';
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { MdOutlineAssignment } from "react-icons/md";

export default function Assignments() {
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
              <li className="wd-assignments list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="me-3 fs-3" />
                  <div>
                  <a className="wd-assignment-link"
                    href="#/Kanbas/Courses/1234/Assignments/123">
                    A1 - ENV + HTML
                  </a>
                  <p>
                    Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am |<br/> 
                    <strong> Due</strong> May 13 at 11:59pm | 100 pts
                  </p>
                  </div>
                </div>
                <LessonControlButtons />
              </li>

              <li className="wd-assignments list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <MdOutlineAssignment className="me-3 fs-3" />
                  <div>
                  <a className="wd-assignment-link"
                    href="#/Kanbas/Courses/1234/Assignments/123">
                    A2 - CSS + BOOTSTRAP
                  </a>
                  <p>
                    Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am |<br/> 
                    <strong> Due</strong> May 20 at 11:59pm | 100 pts
                  </p>
                  </div>
                </div>
                <LessonControlButtons />
              </li>
              </ul>
            </li>
          </ul>
      </div>
  );}  