import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { BsPlus } from 'react-icons/bs';
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from './GreenCheckmark';
import RoleProtected from "../../RoleProtected";

export default function ModuleControlButtons(
  { moduleId, deleteModule, editModule }: { moduleId: string; deleteModule: (moduleId: string) => void; 
                                            editModule: (moduleId: string) => void}){
  return (
    <RoleProtected allowedRole="FACULTY">
    <div className="float-end">
      <FaPencil onClick={() => {
                          console.log("Editing module with ID:", moduleId);
                          editModule(moduleId);
                        }} className="text-primary me-3" />
      <FaTrash className="text-danger me-2 mb-1" onClick={() => {
                                                            console.log("Editing module with ID:", moduleId);
                                                            deleteModule(moduleId);
                                                          }} />
      <GreenCheckmark />
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
    </RoleProtected>
  );
}