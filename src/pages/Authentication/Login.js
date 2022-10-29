import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React from "react"

import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"

// Redux
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// actions
import { loginUser, apiError, socialLogin } from "../../store/actions"

// import images
import profile from "assets/images/profile-img.png"
import logo from "assets/images/logo.png"
import "./style.scss"

const Login = props => {
  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    props.loginUser(values, props.history)
  }

  //handleTwitterLoginResponse
  // const twitterResponse = e => {}

  return (
    <React.Fragment>
     <MetaTags>
          <title>تسجيل الدخول</title>
        </MetaTags>
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
                    <Link to="/" className="auth-logo-light">
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
                          >
                            دخول
                          </button>
                        </div>
                      </div>

                      <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted">
                          <i className="mdi mdi-lock me-1" />
                          نسيت كلمة المرور ؟
                        </Link>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-2 text-center">
                <p>
                  ليس لديك حساب ؟{" "}
                  <Link
                    to="register"
                    className="fw-medium text-primary"
                  >
                    {" "}
                    سجل الآن{" "}
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

const mapStateToProps = state => {
  const { error } = state.Login
  return { error }
}

export default withRouter(
  connect(mapStateToProps, { loginUser, apiError, socialLogin })(Login)
)

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
  socialLogin: PropTypes.func
}