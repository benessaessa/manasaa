import React, { useState, useRef } from "react";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Select from "react-select";
// import { toast } from "react-toastify";
// import { SuccessCreated } from "configs/statusCode";
const ModalAdd = ({modal,toggle}) => {
    const formRef = useRef();
    return (
        <Modal
        dir="rtl"
        className="rightModalSide scrollbar-container animate"
        fade={true}
        isOpen={modal}
        toggle={() => {
            toggle();
        }}
        >
        <ModalHeader toggle={toggle}>
            <h4 className="fw-bold">
            إضافة درس
            </h4>
        </ModalHeader>
        <AvForm
            ref={formRef}
            className="form-horizontal"
            onValidSubmit={(e, v) => {
            handleValidSubmit(e, v);
            }}
        >
            <ModalBody>
            <AvField
                name="name"
                label="اسم الدرس"
                className="form-control mb-2"
                placeholder="مثال ... درس تعليم تحرير النص"
                type="text"
                required
                errorMessage="This field is required"
            />
            <AvField
                name="url"
                label="رابط الدرس"
                className="form-control mb-2"
                placeholder="مثال ... https://www.youtube.com/embed/zfmu_GH_3sg"
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
