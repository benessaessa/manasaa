import React from 'react'
import { Container , Row , Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import logoImage from "assets/images/favicon.ico"
import image1 from "assets/images/megamenu-img.png"
import image2 from "assets/images/image2.jpg"
import './style.scss'
import SwiperEffect from './SwiperEffect';

const Home = () => {
  return (
    <div className="website">
      <div className="bgLanding pb-4">
        <Container fluid>
          <div className="d-flex justify-content-between py-3 px-md-5">
            <div className="pt-3">
              <Link to="#" className="textBlack font-size-20">
                <img
                  src={logoImage}
                  className="me-2"
                  width="50px"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="2000"
                />
                <span className="text-uppercase">Manassa</span>
              </Link>
            </div>
            <div className="pt-3 d-sm-flex d-block">
              <Link to="/register">
                <button className="btn d-none d-sm-block height56 me-4 btn-outline-primary fw-bold px-5">
                  Start For Free
                </button>
              </Link>
              <Link to="/login">
                <button className="height56 btnGetStarted px-5 border-0 fw-bold">
                  Login to my website
                </button>
              </Link>
            </div>
          </div>
        </Container>
        <Container>
          <Row className="ps-md-5 justify-content-between">
            <Col lg="6">
              <div
                className="pt-lg-5"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="2000"
              >
                <h1 className="textPrim display-5 pt-lg-5 fw-bold">
                  However you teach, <br /> it’s in Manassa
                </h1>
                <h4 className="py-3">
                Real-time insights into student understanding through interactive lessons, interactive videos, gamification, and activities — all in a single platform.
                </h4>
                <button className="btn height56 btnGetStarted px-5 mt-4 mb-5">
                  Start For Free
                </button>
              </div>
            </Col>
            <Col lg="5">
              <div className='pt-lg-5'>
                <img
                  src={image1}
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <div className='bg-white'>
          <SwiperEffect />
        </div>
      </div>
    </div>
  )
}

export default Home