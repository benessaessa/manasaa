import React, { useState } from 'react';
import {Container} from 'reactstrap';
import Accordion from '../../components/Common/Accordion';
import ModalAdd from './ModalAdd/index';
const EditText = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className='text-end'>
            <h3 className='pb-1 text-primary'>مهارة تحرير النص <i className='fa fa-edit ps-2'></i></h3>
            <p className='opacity-50 font-size-18 pb-3'>شرح مهارة تحرير النص وكيفية الإستخدام </p>
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
            <h1 className='tableSkills'></h1>
            {/* <iframe width="100%" height="400" src="https://www.youtube.com/embed/zfmu_GH_3sg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <Accordion title="الدرس الأول" content="https://www.youtube.com/embed/zfmu_GH_3sg"/>
            <Accordion title="الدرس الثاني" content="https://www.youtube.com/embed/RzQ6SlcJA3I"/>
            <Accordion title="الدرس الثالث" content="https://www.youtube.com/embed/dy5r2k0QnpY"/>
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

export default EditText