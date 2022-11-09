import React, { useState } from 'react';
import {Container} from 'reactstrap';
import Accordion from './Accordion';

const EditText = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className='text-end'>
            <h3 className='pb-1'>مهارة تحرير النص <i className='fa fa-edit ps-2'></i></h3>
            <p className='opacity-75 font-size-18 pb-3'>شرح مهارة تحرير النص وكيفية الإستخدام </p>
            {/* <iframe width="100%" height="400" src="https://www.youtube.com/embed/zfmu_GH_3sg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <Accordion title="الدرس الأول" content="https://www.youtube.com/embed/zfmu_GH_3sg"/>
            <Accordion title="الدرس الثاني" content="https://www.youtube.com/embed/RzQ6SlcJA3I"/>
            <Accordion title="الدرس الثالث" content="https://www.youtube.com/embed/dy5r2k0QnpY"/>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default EditText