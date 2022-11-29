import React ,{useState} from 'react'
import { Modal } from "reactstrap";
import PropTypes from "prop-types"
import { toast } from "react-toastify";
// import deleteImg from "../../assets/images/trash.svg"

function DeleteModal(props) {
    const [loading, setLoading] = useState(false)

    const handleDeletedItem = async () => {
        setLoading(true)
        const { data: response } = await props.modelService.remove(props.deletedItem.id);
        toast.success(response.success)
        return props.onCloseModal('delete', response)
    }
    return (
        <Modal isOpen={props.open}   >
            <div className="modal-header border-0">
                <h5 className="modal-title mx-4" id="myModalLabel">
                     Delete {props.titleMsg}
                </h5>
                <button
                    type="button"
                    onClick={() => props.onCloseModal('close')}
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body border-0">
                <p>
                    {`Kindly note that this action can't be undone and the ${props.titleMsg} details will get deleted.`}
                </p>
            </div>
            <div className="modal-footer border-0">
                <button
                    type="button"
                    onClick={() => props.onCloseModal('close')}
                    className="btn me-auto btn-secondary waves-effect waves-light"
                    data-dismiss="modal"
                >
                    Cancel
            </button>
                <button
                    onClick={handleDeletedItem}
                    type="button"
                    className="btn btn-success waves-effect"
                    disabled={loading ? true : false}

                >
                    Delete
            </button>
            </div>
        </Modal>
    )
}

DeleteModal.propTypes = {
    open: PropTypes.bool,
    onCloseModal: PropTypes.func,
    handleTableChange: PropTypes.func,
    deletedItem: PropTypes.object,
    modelService: PropTypes.object,
    titleMsg: PropTypes.string
};

export default DeleteModal
