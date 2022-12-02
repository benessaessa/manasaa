import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Label, Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { AvForm, AvField, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import Select from "react-select";
import { toast } from "react-toastify";


function ModalForm({ modal, toggle, isAdd, editObj, Service, type, id, placeholder, setList, setShouldGetData }) {
    const [loading, setLoading] = useState(false)
    const [Questions, setQuestions] = useState([
        { label: "اختر", value: "choose" },
        { label: "مقالى", value: "write" },
        { label: " صح او خطا", value: "correct" }

    ])
    const [selectedQuestion, setSelectedQuestion] = useState(null)
    useEffect(() => {
        if (selectedQuestion ?.value === "choose") {
            setFormData({ ...formData, answers: ["", ""] })
        } else if (selectedQuestion ?.value === "write") {
            setFormData({ ...formData, answers: [""] })

        } else if (selectedQuestion ?.value === "correct") {
            setFormData({ ...formData, answers: [] })

        }
    }, [selectedQuestion])
    const service = new Service()
    const [formData, setFormData] = useState({
        name: "",
        answers: [],
        correct: ""
    })

    const formRef = useRef();

    useEffect(() => {
        if (editObj ?.id) {
            service.find(editObj ?.id).then(res => {
                console.log(res)
                if (res && res.status === 200) {
                    if (res.data.type == 1 || res.data.type === 2) {
                        setFormData({ name: res ?.data ?.name })
                    } else {
                        setFormData({ name: res ?.data ?.name, correct: res.data.correct })
                    }

                    const selectedValue = res.data.type === 1 ? { label: "اختر", value: "choose" } : res.data.type === 2 ? { label: "مقالى", value: "write" } : { label: " صح او خطا", value: "correct" }
                    setSelectedQuestion(selectedValue)
                }
            })
        }
    }, [])


    const handleFieldChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleValidSubmit = (_, values) => {
         if (!selectedQuestion) {
            toast.error("نوع السؤال مطلوب")
            return
        }
        let data = {}
        setLoading(true)
        if (isAdd) {

            if (selectedQuestion ?.value === "choose" || selectedQuestion ?.value === "write" ) {
                data = {
                    question: formData.name,
                    type: selectedQuestion ?.value === "choose" ? 2 : selectedQuestion ?.value === "write" ? 1 : 3,
                    lesson_id: id,
                    answers: formData.answers.map((item) => ({ answer: item }))
                }
            } else {
                data = {
                    question: formData.name,
                    type: selectedQuestion ?.value === "choose" ? 2 : selectedQuestion ?.value === "write" ? 1 : 3,
                    lesson_id: id,
                    answers: [{ answer: "صح" }, { answer: "خطأ" }].map(item => {
                        if (formData.correct === "1" && item.answer === "صح") {
                            return {
                                ...item,
                                correct: 1
                            }
                        } else  if (formData.correct === "0" && item.answer === "خطأ") {
                            return {
                                ...item,
                                correct: 1
                            }
                        }else{
                            return item
                        }
                    })
                }

            }

            service.create(data).then(res => {
                if (res && res.status === 201) {
                    setShouldGetData(true)
                    toast.success("مت الاضافة بنجاح")
                    toggle()
                } else {
                    setLoading(false)
                }
            })
        } else {
            if (selectedQuestion ?.value === "choose" || selectedQuestion ?.value === "write" ) {
                data = {
                    question: formData.name,
                    type: selectedQuestion ?.value === "choose" ? 2 : selectedQuestion ?.value === "write" ? 1 : 3,
                    lesson_id: 1,
                    answers: formData.answers.map((item) => ({ answer: item }))
                }
            }
            service.update(editObj.id, data).then(res => {
                if (res && res.status === 200) {
                    setShouldGetData(true)
                    toast.success("تم التعديل بنجاح")
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
                        name={`name`}
                        label="اسم الدرس"
                        className="form-control mb-2"
                        placeholder={`مثال ... درس تعليم تحرير النص`}
                        type="text"
                        required
                        errorMessage="مطلوب"
                        value={formData.name}
                        onChange={handleFieldChange}
                    />
                    <Col md={6}>
                        <Label>اختر نوع السؤال</Label>
                        <Select
                            placeholder='اختر'
                            options={Questions}
                            onChange={(data) => {
                                setSelectedQuestion(data);
                            }}
                            value={selectedQuestion}
                            setOptions={(options) => {
                                setQuestions(options)
                            }}
                        />
                    </Col>
                </ModalBody>
                {selectedQuestion ? selectedQuestion ?.value === "choose" || selectedQuestion ?.value === "write" ?
                    <Label className="m-4">الاجابة</Label>
                    : null : null}
                {selectedQuestion ? selectedQuestion ?.value === "choose" || selectedQuestion ?.value === "write" ? formData.answers.map((item, index) => {
                    return (
                        <Row key={index} className="mx-2 justify-between">
                            <Col md={6} className="">
                                <AvField
                                    name={`name${index}`}
                                    label="اسم الدرس"
                                    className="form-control mt-0"
                                    placeholder={`مثال ... درس تعليم تحرير النص`}
                                    type="text"
                                    required
                                    errorMessage="مطلوب"
                                    value={item}
                                    onChange={(e) => {
                                        const updatedAnswers = formData.answers.map((item, itemIndex) => {
                                            if (index === itemIndex) {
                                                return e.target.value
                                            } else {
                                                return item
                                            }
                                        })
                                        console.log(updatedAnswers)
                                        setFormData({ ...formData, answers: updatedAnswers })
                                    }}
                                />
                            </Col>
                            <Col md={2}>
                                <Button className="btn-danger mt-4" onClick={() => {
                                    const updatedAnswers = formData.answers.splice(index + 1, 1)
                                    setFormData({ ...formData, answers: updatedAnswers })
                                }}>x</Button>
                            </Col>

                        </Row>
                    )
                }) :
                    <Col md={8}>
                        <AvRadioGroup inline name="correct" className="mx-4" required value={formData.correct} onChange={handleFieldChange} errorMessage="مطلوب" >
                            <AvRadio label="صح" value="1" />
                            <AvRadio label="خطا" value="0" />
                        </AvRadioGroup>
                    </Col> : null
                }
                 {(selectedQuestion ?.value === "choose" || selectedQuestion ?.value === "write" )&& <Col md={6}>
                    <Button className="m-4" onClick={() => {
                        setFormData({ ...formData, answers: [...formData.answers, ""] })
                    }}> اضافة اجابة اخرى</Button>  </Col>}
                < ModalFooter >
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
