import React, { useState, useRef } from "react";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import { toast } from "react-toastify";
// import { SuccessCreated } from "configs/statusCode";

const ModalAdd = ({modal,toggle}) => {
    const formRef = useRef();
    return (
        <Modal
        dir="rtl"
        className="rightModalSide scrollbar-container"
        isOpen={modal}
        toggle={() => {
            toggle();
        }}
        >
        <ModalHeader toggle={toggle}>
            <h4 className="fw-bold">
            إضافة مهارة
            </h4>
        </ModalHeader>
        <AvForm
            ref={formRef}
            className="form-horizontal"
            onValidSubmit={(e, v) => {
             }}
        >
            <ModalBody>
            <AvField
                name="name"
                label="المهارة"
                className="form-control mb-2"
                placeholder="مثال ... مهارة تحرير النص"
                type="text"
                required
                errorMessage="This field is required"
            />
            </ModalBody>
            <ModalFooter>
            <button
                type="submit"
                className="btn btn-primary py-2 w-100"
            >
                حفظ
            </button>
            </ModalFooter>
        </AvForm>
        </Modal>
    );
}

export default ModalAdd;
