import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import RoleProtected from "../../RoleProtected";

export default function LessonControlButtons() {
  return (
    <RoleProtected allowedRole="FACULTY">
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
    </RoleProtected>
);}
