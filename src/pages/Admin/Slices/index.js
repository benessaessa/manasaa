import React,{useState } from 'react';
import {Container} from 'reactstrap';
import ModalAdd from './ModalAdd/index';
import './style.scss'
const Slices = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <h3 className='pb-2'>
                        <span className='float-end'>الأجزاء</span>
                        <button
                        onClick={() => {
                            toggle();
                        }}
                        className="btn btn-primary float-start mb-2 px-4"
                        >
                        <i className='fa fa-plus pe-2'></i> إضافة جزء
                        </button>
                    </h3>
                    <div className='table-responsive tableSkills bg-white mt-5' dir='rtl'>
                        <table className='table'>
                            <thead>
                                <tr className="">
                                    <th className="font-size-16">إسم الجزء</th>
                                    <th className="font-size-16">إسم الدرس</th>
                                    <th className="font-size-16"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>جزء الكتابة</td>
                                    <td> تحرير النص</td>
                                    <td>
                                        <button className='btn btn-primary'><i className='fa fa-edit ps-2'></i> تعديل</button>
                                        <button className='btn btn-danger me-2'> <i className='fa fa-trash-alt ps-2'></i> حذف</button>
                                        <button className='btn btn-info me-2'><i className='fa fa-eye ps-2'></i> عرض </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>جزء الصوت</td>
                                    <td> تحرير الصوت</td>
                                    <td>
                                        <button className='btn btn-primary'><i className='fa fa-edit ps-2'></i> تعديل</button>
                                        <button className='btn btn-danger me-2'> <i className='fa fa-trash-alt ps-2'></i> حذف</button>
                                        <button className='btn btn-info me-2'><i className='fa fa-eye ps-2'></i> عرض </button>
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

export default Slices