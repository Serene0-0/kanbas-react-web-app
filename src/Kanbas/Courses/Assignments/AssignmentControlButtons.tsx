import { BsPlus } from 'react-icons/bs';
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from './GreenCheckmark';

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <span className="badge rounded-pill bg-light text-dark px-3 py-2">
        40% of Total
      </span>
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}