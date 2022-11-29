import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { toast } from "react-toastify";


function ModalForm({ modal, toggle, isAdd, editObj, Service, type,number, placeholder, setList, setShouldGetData }) {
    const [loading, setLoading] = useState(false)
    const service = new Service()
    const [formData, setFormData] = useState({
             name:"",
            url: "",
      })
    const formRef = useRef();

    useEffect(() => {
        if (editObj ?.id) {
            service.find(editObj ?.id).then(res => {
                console.log(res)
                if (res && res.status === 200) {
                    setFormData({ name:res ?.data ?.name,url:res.data.url})
                }
            })
        }
    }, [])

    const handleFieldChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
 
    const handleValidSubmit = (_, values) => {
        let data = {}
        setLoading(true)
        if (isAdd) {
            data = {
                name: formData.name,
                url: formData.url,
                skill_id: number
            }
 
            service.create(data).then(res => {
                if (res && res.status === 201) {
                    setShouldGetData(true)
                    toast.success( "تمت الاضافة بنجاح")
                    toggle()
                } else {
                    setLoading(false)
                }
            })
        } else {
            data = {
                name: formData.name,
                url: formData.url,
                skill_id: number
            }
            service.update(editObj.id, data).then(res => {
                if (res && res.status === 200) {
                     setShouldGetData(true)
                    toast.success( "تم التعديل بنجاح")
                    toggle()
                } else {
                    setLoading(false)
                }

            })
        }
    }
    return (
        <Modal isOpen={modal} toggle={toggle} className="scrollbar-container mt-5 " dir={"rtl"}>
            <ModalHeader toggle={toggle}>
                <h4 className="fw-bold">
                    إضافة {type}
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
                         placeholder={`مثال ... درس تعليم تحرير النص`}
                        type="text"
                        required
                        errorMessage="مطلوب"
                        value={formData.name}
                        onChange={handleFieldChange}
                    />
                    <AvField
                        name="url"
                        value={formData.url}
                        label="رابط الدرس"
                        className="form-control mb-2"
                        placeholder="مثال ... https://www.youtube.com/embed/zfmu_GH_3sg"
                        type="text"
                        required
                        errorMessage="مطلوب"
                        onChange={handleFieldChange}

                    />
                </ModalBody>
                <ModalFooter>
                    <button
                        type="submit"
                        className="btn btn-primary py-2 w-100"
                    disabled={loading}
                    >
                        حفظ
            </button>
                </ModalFooter>
            </AvForm>
        </Modal>
    );
}

export default ModalForm;
