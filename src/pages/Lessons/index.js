import React,{useState } from 'react';
import {Container} from 'reactstrap';
import ModalAdd from './ModalAdd/index';
import './style.scss'
const Lessons = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <h3 className='pb-2'>
                        <span className='float-end'>الدروس</span>
                        <button
                        onClick={() => {
                            toggle();
                        }}
                        className="btn btn-primary float-start mb-2 px-4"
                        >
                        <i className='fa fa-plus pe-2'></i> إضافة درس
                        </button>
                    </h3>
                    <div className='table-responsive tableSkills bg-white mt-5' dir='rtl'>
                        <table className='table'>
                            <thead>
                                <tr className="">
                                    <th className="font-size-16">إسم الدرس</th>
                                    <th className="font-size-16">إسم المهارة</th>
                                    <th className="font-size-16"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>درس تعلم كيفية الكتابة</td>
                                    <td>مهارة تحرير النص</td>
                                    <td>
                                        <button className='btn btn-primary'>تعديل</button>
                                        <button className='btn btn-danger me-2'>حذف</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>درس تعلم كيفية تعديل الصوت</td>
                                    <td>مهارة تحرير الصوت</td>
                                    <td>
                                        <button className='btn btn-primary'>تعديل</button>
                                        <button className='btn btn-danger me-2'>حذف</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {modal && (
                        <ModalAdd
                            modal={modal}
                            toggle={toggle}
                        />
                    )}
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Lessons