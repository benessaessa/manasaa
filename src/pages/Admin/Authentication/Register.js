import React, { useState, useEffect } from "react"
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { Link } from "react-router-dom"
import profileImg from "../../../assets/images/profile-img.png"
import logoImg from "../../../assets/images/logo.png"
import "./style.scss"
import http from "../../../services/HttpService";
import { API_BASE_URL_ENV } from "../../../helpers/common";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux"
import {authenticate} from "../../../store/Auth/actions"
const regsiterApiEndpoint = API_BASE_URL_ENV() + "/admin/user/register";

const Register = props => {
  const [loading, setLoading] = useState(false)
  const dispatch=useDispatch()

  const handleValidSubmit = (event, values) => {
    setLoading(true)
    http.post(regsiterApiEndpoint, values).then((res) => {
      if(res.status===201){ 
        dispatch(authenticate({token:res.data.access_token}))
        toast.success("تم التسجيل بنجاح")
        localStorage.setItem(
          "token", res.data.access_token
        );
        props.history.push(`/dashboard`);
      }  
   }).catch((error) => {
    toast.error(error?.response?.data?.message)
      setLoading(false)
    })
   };

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages pt-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">تسجيل مجاني</h5>
                        <p>Get your free account</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profileImg} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logoImg}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      {props.user && props.user ? (
                        <Alert color="success">
                          تم التسجيل بنجاح
                        </Alert>
                      ) : null}
            
                      {props.registrationError &&
                      props.registrationError ? (
                        <Alert color="danger">
                          {props.registrationError}
                        </Alert>
                      ) : null}

                      <div className="mb-3">
                        <AvField
                          name="name"
                          label="اسم المستخدم"
                          type="text"
                          required
                          placeholder="اسم المستخدم"
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          id="email"
                          name="email"
                          label="البريد الإلكتروني"
                          className="form-control text-end"
                          placeholder="البريد الإلكتروني"
                          type="email"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="الرقم السري"
                          type="password"
                          required
                          placeholder="من فضلك قم بإدخال الرقم السري"
                        />
                      </div>
                      <div className="mb-3">
                        <AvField
                          name="password_confirmation"
                          label="تاكيد الرقم السرى"
                          type="password"
                          required
                          placeholder="من فضلك قم بإدخال  تاكيد الرقم السري"
                        />
                      </div>

                      <div className="mt-4">
                        <button
                          className="btn btn-primary btn-block waves-effect waves-light"
                          type="submit"
                          disabled={loading}
                        >
                          تسجيل
                        </button>
                      </div>

                      {/* <div className="mt-4 text-center">
                        <p className="mb-0">
                          By registering you agree to the Skote{" "}
                          <Link to="#" className="text-primary">
                            Terms of Use
                          </Link>
                        </p>
                      </div> */}
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-2 text-center">
                <p>
                  لديك حساب بالفعل؟{" "}
                  <Link to="login" className="font-weight-medium text-primary">
                    {" "}
                    تسجيل الدخول
                  </Link>{" "}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}
 
 

export default Register
