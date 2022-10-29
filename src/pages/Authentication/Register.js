import PropTypes from "prop-types"
import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// action
import { registerUser, apiError, registerUserFailed } from "../../store/actions"

// Redux
import { connect } from "react-redux"
import { Link } from "react-router-dom"

// import images
import profileImg from "../../assets/images/profile-img.png"
import logoImg from "../../assets/images/logo.png"
import "./style.scss"

const Register = props => {
  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    props.registerUser(values)
  }

  useEffect(() => {
    props.apiError("")
  }, []);

  return (
    <React.Fragment>
     <MetaTags>
          <title>التسجيل</title>
        </MetaTags>
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
                          name="username"
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
                          name="code"
                          label="الكود"
                          type="text"
                          required
                          placeholder="الكود"
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

                      <div className="mt-4">
                        <button
                          className="btn btn-primary btn-block waves-effect waves-light"
                          type="submit"
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
                  <Link to="/login" className="font-weight-medium text-primary">
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

Register.propTypes = {
  registerUser: PropTypes.func,
  registerUserFailed: PropTypes.func,
  registrationError: PropTypes.any,
  user: PropTypes.any,
}

const mapStatetoProps = state => {
  const { user, registrationError, loading } = state.Account
  return { user, registrationError, loading }
}

export default connect(mapStatetoProps, {
  registerUser,
  apiError,
  registerUserFailed,
})(Register)
