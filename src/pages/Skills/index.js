import React,{useState } from 'react';
import {Container} from 'reactstrap';
import ModalAdd from './ModalAdd/index';
import './style.scss'
const Skills = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <h3 className='pb-2'>
                        <span className='float-end'>المهارات</span>
                        <button
                        onClick={() => {
                            toggle();
                        }}
                        className="btn btn-primary float-start mb-2 px-4"
                        >
                        <i className='fa fa-plus pe-2'></i> إضافة مهارة
                        </button>
                    </h3>
                    <div className='table-responsive tableSkills bg-white mt-5' dir='rtl'>
                        <table className='table'>
                            <thead>
                                <tr className="">
                                    <th className="font-size-16">إسم المهارة</th>
                                    <th className="font-size-16"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>مهارة تحرير النص</td>
                                    <td>
                                        <button className='btn btn-primary'><i className='fa fa-edit ps-2'></i> تعديل</button>
                                        <button className='btn btn-danger me-2'> <i className='fa fa-trash-alt ps-2'></i> حذف</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>مهارة تحرير الصوت</td>
                                    <td>
                                        <button className='btn btn-primary'><i className='fa fa-edit ps-2'></i> تعديل</button>
                                        <button className='btn btn-danger me-2'> <i className='fa fa-trash-alt ps-2'></i> حذف</button>
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

export default Skills