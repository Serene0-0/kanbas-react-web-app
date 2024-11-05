import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import DeleteButton from "./DeleteButton";
import RoleProtected from "../../RoleProtected";

export default function LessonControlButtons({assignmentId} : {assignmentId : string}) {
  return (
    <RoleProtected allowedRole="FACULTY">
    <div className="float-end">
      <DeleteButton assignmentId={assignmentId}/>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
    </RoleProtected>
);}
