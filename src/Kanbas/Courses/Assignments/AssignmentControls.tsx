import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoleProtected from "../../RoleProtected";

export default function AssignmentControls({ cid }: { cid: string }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [assignmentName, setAssignmentName] = useState("");

    const handleAddAssignment = () => {
        
        navigate(`/Kanbas/Courses/${cid}/Assignments/newAssignment`);
      };

    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            <RoleProtected allowedRole="FACULTY">
            <button onClick={handleAddAssignment} id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
            <FaPlus onClick={handleAddAssignment} className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment</button>
            <div className="dropdown d-inline me-1 float-end"></div>

            <button id="wd-view-progress" className="btn btn-lg btn-secondary me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </button>
            </RoleProtected>
            <div className="col-sm-6 float-end" style={{ width: '400px', marginRight: '20px', height: 'calc(2.5rem + 2px)' }}>
                <div className="input-group">
                    <span className="input-group-text">
                        <CiSearch />
                    </span>
                    <input type="text" className="form-control"
                        id="wd-assignment-controls" placeholder="Search..." 
                        style={{ height: 'calc(2.5rem + 3px)', fontSize: '1.25rem' }}  />
                </div>
            </div>
        </div>
    );
}