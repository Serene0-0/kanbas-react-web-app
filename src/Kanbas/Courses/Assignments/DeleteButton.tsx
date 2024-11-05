import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteAssignment } from "./reducer";

export default function DeleteButton ({ assignmentId }: { assignmentId: string }) {
    const dispatch = useDispatch();
    const [showDialog, setShowDialog] = useState(false);
    const handleDeleteClick = () => {
        setShowDialog(true);
    };
    const confirmDelete = () => {
        dispatch(deleteAssignment(assignmentId));
        setShowDialog(false);
    };
    const cancelDelete = () => {
        setShowDialog(false);
    };
    return (
        <span>
            <FaTrash className="text-danger me-2 mb-1" onClick={handleDeleteClick} />
            {showDialog && (
                <div className="modal fade show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Delete</h5>
                                <button type="button" className="btn-close" onClick={cancelDelete}></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to remove this assignment?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={cancelDelete}>
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-danger" onClick={confirmDelete}>
                                    Yes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </span>
    );
}