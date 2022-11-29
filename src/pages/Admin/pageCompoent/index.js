import React, { useEffect, useState } from "react"
import MetaTags from "react-meta-tags"
import { Container, Row, Col, Table, Card, CardBody, } from "reactstrap"
 import "./Style.scss"
import ModalAdd from "./ModalForm"
import Paginator from "../../../components/Common/Paginator"
 import Accordion from '../../../components/Common/Accordion';
 import DeleteModal from "../../../components/Common/DeleteModal"

const SystemPage = ({ Service, type, header, subtitle, placeholder, number }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [deletedItem, setDeleteItem] = useState(null);

  const service = new Service()
  const [modal, setModal] = useState(false)
  const [editObj, setEditObj] = useState(null)
  const [add, setAdd] = useState(true)
  const [filtersParams, setFilterParams] = useState({ skill_id: number })
  const [shouldGetData, setShouldGetData] = useState(false)
  const [searchWord, setSearchWord] = useState("") 
  const [list, setList] = useState([])
  const [pageOptions, setPageOptions] = useState({
    sizePerPage: 10,
    totalSize: 1,
  })
  const addHandler = () => {
    setAdd(true)
    setEditObj(null)
    toggle()
  }
  const toggle = () => {
    setModal(!modal)
  }
 
  const handleCloseModal = (action, response) => {
    setDeleteModal(false);
    if (action === "delete") {
        setShouldGetData(true)
    }
}
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <div className='text-end'>
            <h3 className='pb-1 text-primary'>{header}<i className='fa fa-edit ps-2'></i></h3>
            <p className='opacity-50 font-size-18 pb-3'>{subtitle} </p>
            <h3 className='pb-2'>
              <span className='float-end'>{type}</span>
              <button
                onClick={() => {
                  addHandler();
                }}
                className="btn btn-primary float-start mb-2 px-4"
              >
                <i className='fa fa-plus pe-2'></i> إضافة {type}
              </button>
            </h3>
            <h1 className='tableSkills'></h1>
            {/* <iframe width="100%" height="400" src="https://www.youtube.com/embed/zfmu_GH_3sg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {
              list.map((item, index) => {
                return <Accordion 
                key={index} title={item.name} 
                content={item.url} id={item.id} edit={()=>{
                  setAdd(false)
                  setEditObj(item)
                  toggle()
                }}
                delete={()=>{
                  setDeleteItem(item)
                  setDeleteModal(true)
                }}
                type={type}
                setList={setList}
                setShouldGetData={setShouldGetData}
                />

              })
            }          
           </div>
          {modal && (
            <ModalAdd
              modal={modal}
              toggle={toggle}
              number={number}
              isAdd={add}
              editObj={editObj}
              setList={setList}
              Service={Service}
              type={type}
              placeholder={placeholder}
              setShouldGetData={setShouldGetData}
            />
          )}
          <Row className="d-flex justify-content-end">
            <Col className="d-flex justify-content-end" md={8} sm={12}>
              <Paginator
                service={service}
                pageOptions={pageOptions}
                setData={(data) => setList([...data])}
                setPageOptions={setPageOptions}
                filtersParams={filtersParams}
                shouldGetData={shouldGetData}
                setShouldGetData={setShouldGetData}


              />
            </Col>
          </Row>
        </Container>
      </div>
      <DeleteModal
                open={deleteModal}
                titleMsg={deletedItem?.name}
                deletedItem={deletedItem}
                modelService={service}
                onCloseModal={(action) => handleCloseModal(action)}
            />
    </React.Fragment>
  )
}

export default SystemPage
