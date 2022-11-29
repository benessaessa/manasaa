import React ,{useState} from "react"
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"
import { Link } from "react-router-dom"
import { AvForm, AvField } from "availity-reactstrap-validation"
import profile from "../../../assets/images/profile-img.png"
import logo from "../../../assets/images/logo.png"
import "./style.scss"
import { API_BASE_URL_ENV } from "../../../helpers/common";
import http from "../../../services/HttpService";
import {toast} from "react-toastify";
import {authenticate} from "../../../store/Auth/actions"
import {useDispatch} from "react-redux"

const loginApiEndpoint = API_BASE_URL_ENV() + "/admin/user/login";

const Login = props => {
  const [loading, setLoading] = useState(false)
  const dispatch=useDispatch()

  const handleValidSubmit = (event, values) => {
    setLoading(true)
    http.post(loginApiEndpoint, values).then((res) => {
      console.log(res)
      if(res.status===200){ 
        dispatch(authenticate({token:res.data.access_token}))
        toast.success("تم الدخول بنجاح")
        console.log(res)
        localStorage.setItem(
          "token", res.data.access_token
        );
         props.history.push(`/admin/dashboard`);
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
      <div className="account-pages pt-5 pb-3">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col xs={8}>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">مرحبا بعودتك !</h5>
                        <p>قم بتسجيل الدخول إلي منصة Learn with me.</p>
                      </div>
                    </Col>
                    <Col className="col-4 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <div  className="auth-logo-light">
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
                    </div>
                  </div>
                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      {props.error && typeof props.error === "string" ? (
                        <Alert color="danger">{props.error}</Alert>
                      ) : null}

                      <div className="mb-3">
                        <AvField
                          name="email"
                          label="البريد الإلكتروني"
                          value="admin@themesbrand.com"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="الرقم السري"
                          value="123456"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>
                      <div>
                        <div className="form-check d-block text-end">
                          <label
                            className="form-check-label pe-3"
                            htmlFor="customControlInline"
                          >
                            تذكرني
                          </label>
                          <input
                            type="checkbox"
                            className="form-check-input float-end"
                            id="customControlInline"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="mt-3 d-grid">
                          <button
                            className="btn btn-primary btn-block waves-effect waves-light"
                            type="submit"
                            disabled={loading}

                          >
                            دخول
                          </button>
                        </div>
                      </div>

                      <div className="mt-4 text-center">
                        <Link to="forget-password" className="text-muted">
                          <i className="mdi mdi-lock me-1" />
                          نسيت كلمة المرور ؟
                        </Link>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}



export default Login