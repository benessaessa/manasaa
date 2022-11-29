import React ,{useState} from "react"
import { Row, Col, Alert, Card, CardBody, Container } from "reactstrap" 
import { Link } from "react-router-dom" 
import { AvForm, AvField } from "availity-reactstrap-validation" 
import "./style.scss"
 import profile from "../../../assets/images/profile-img.png"
import logo from "../../../assets/images/logo.png"
import { API_BASE_URL_ENV } from "../../../helpers/common";
import http from "../../../services/HttpService";
import {toast} from "react-toastify";
const forgetApiEndpoint = API_BASE_URL_ENV() + "/admin/user/forget-password";

const ForgetPasswordPage = props => {
  const [loading, setLoading] = useState(false)

  function handleValidSubmit(event, values) {
    setLoading(true)
    http.post(forgetApiEndpoint, values).then((res) => {
      if(res.status===200){ 
        toast.success("Email sent successfully")
        props.history.push(`/admin/reset-password`);
      }  
   }).catch((error) => {
    toast.error(error?.response?.data?.message)
      setLoading(false)
    })
   }

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col xs={7}>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">مرحبا بعودتك ! </h5>
                        <p>نسيت كلمة المرور !</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logo}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    {props.forgetError && props.forgetError ? (
                      <Alert color="danger" style={{ marginTop: "13px" }}>
                        {props.forgetError}
                      </Alert>
                    ) : null}
                    {props.forgetSuccessMsg ? (
                      <Alert color="success" style={{ marginTop: "13px" }}>
                        {props.forgetSuccessMsg}
                      </Alert>
                    ) : null}

                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => handleValidSubmit(e, v)}
                    >
                      <div className="mb-3">
                        <AvField
                          name="email"
                          label="البريد الإلكتروني"
                          className="form-control"
                          placeholder="أدخل البريد الإلكتروني"
                          type="email"
                          required
                        />
                      </div>
                      <Row className="mb-3">
                        <Col className="text-right">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            type="submit"
                            disabled={loading}
                          >
                            إعادة تعيين
                          </button>
                        </Col>
                      </Row>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  الرجوع للخلف !{" "}
                  <Link to="login" className="font-weight-medium text-primary">
                    دخول
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

 

export default ForgetPasswordPage 
