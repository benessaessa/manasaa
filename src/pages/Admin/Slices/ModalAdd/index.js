import React, { useState, useRef } from "react"
import { AvField, AvForm } from "availity-reactstrap-validation"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap" 
import FileUpload from "../../../../components/Common/file-upload/file-upload.component";
const ModalAdd = ({ modal, toggle }) => {
  const formRef = useRef()
  return (
    <Modal
      dir="rtl"
      className="rightModalSide scrollbar-container animate"
      fade={true}
      isOpen={modal}
      toggle={() => {
        toggle()
      }}
    >
      <ModalHeader toggle={toggle}>
        <h4 className="fw-bold">إضافة درس</h4>
      </ModalHeader>
      <ModalBody>
        <AvForm
          ref={formRef}
          className="form-horizontal"
          onValidSubmit={(e, v) => {
           }}
        >
          <AvField
            name="name"
            label="اسم الدرس"
            className="form-control mb-2"
            placeholder="مثال ... درس تعليم تحرير النص"
            type="text"
            required
            errorMessage="This field is required"
          />
          <FileUpload
            label="الملفات"
            className="border-danger w-100"
        />
        </AvForm>
      </ModalBody>
      <ModalFooter>
        <button type="submit" className="btn btn-primary py-2 w-100">
          حفظ
        </button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalAdd
