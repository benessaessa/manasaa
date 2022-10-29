import React from 'react'
import { Container , Row , Col, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import logoImage from "assets/images/logo2.png"
import image1 from "assets/images/megamenu-img.png"
import image4 from "assets/images/image4.jpg"
import icon from "assets/images/icon.png";
import icon2 from "assets/images/icon2.png";
import icon3 from "assets/images/icon3.png";
import icon4 from "assets/images/icon4.png";
import icon5 from "assets/images/icon5.png";
import icon6 from "assets/images/icon6.png";
import './style.scss'
import SwiperEffect from './SwiperEffect';

const Home = () => {
  return (
    <div className="website">
      <div className="bgLanding">
        <Container fluid>
          <div className="d-flex justify-content-between py-3 px-md-5">
            <div className="pt-0">
              <Link to="#" className="textBlack font-size-20">
                <img
                  src={logoImage}
                  className="me-2 img-fluid"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="2000"
                />
              </Link>
            </div>
            <div className="pt-3 d-sm-flex d-block">
              <Link to="/register">
                <button className="btn d-none d-sm-block height56 me-4 btn-outline-primary fw-bold px-5">
                  سجل الآن مجانا
                </button>
              </Link>
              <Link to="/login">
                <button className="height56 btnGetStarted px-5 border-0 fw-bold">
                  دخول
                </button>
              </Link>
            </div>
          </div>
        </Container>
        <Container>
          <Row className="ps-md-5 justify-content-between">
            <Col lg="5">
              <div className='pt-lg-5'>
                <img
                  src={image1}
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  className="img-fluid imgFlip"
                />
              </div>
            </Col>
            <Col lg="6">
              <div
                className="pt-lg-5 text-end"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="2000"
              >
                <h1 className="textPrim display-5 pt-lg-5 fw-bold">
                   ! كيف تدرس 
                   <br /> it’s in Learn with me
                </h1>
                <h4 className="py-3">
                رؤى في الوقت الفعلي لفهم الطلاب من خلال الدروس التفاعلية ومقاطع الفيديو التفاعلية واللعبة والأنشطة - كل ذلك في نظام أساسي واحد.
                </h4>
                <Link to="/register">
                  <button className="btn height56 btnGetStarted font-size-16 px-5 mt-4 mb-5">
                    يمكنك البدء مجانا
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <div className='bg-white'>
          <SwiperEffect />
        </div>
        <div className="bgPrimary py-5" dir='rtl'>
          <Container>
            <CardText tag="h2" className="text-white text-center fw-bold">ما الذي يجعل Learn With me مختلف ؟</CardText>
            <Row className="pt-4">
              <Col md="4" sm="6" className="pb-4">
                <div className="cardFeature" data-aos='fade-up' data-aos-delay='100' data-aos-duration='1000'>
                  <img src={icon} className="imageIcon" />
                  <CardText tag="h4" className="textPrim fw-bold py-2">Competitive Pricing</CardText>
                  <CardText tag="p" className="font-size-14">There’s multiple ways to book appointments with pricing options that suit your business, no matter the size.</CardText>
                </div>
              </Col>
              <Col md="4" sm="6" className="pb-4">
                <div className="cardFeature" data-aos='fade-up' data-aos-delay='150' data-aos-duration='1500'>
                  <img src={icon2} className="imageIcon" />
                  <CardText tag="h4" className="textPrim fw-bold py-2">Set Your Hours</CardText>
                  <CardText tag="p" className="font-size-14">Manage your team schedule, holidays, and working hours, so your clients know when to book.</CardText>
                </div>
              </Col>
              <Col md="4" sm="6" className="pb-4">
                <div className="cardFeature" data-aos='fade-up' data-aos-delay='200' data-aos-duration='2000'>
                  <img src={icon3} className="imageIcon" />
                  <CardText tag="h4" className="textPrim fw-bold py-2">Manage Students</CardText>
                  <CardText tag="p" className="font-size-14">Keep track of your Students, manage appointment history, and more with dashboard.</CardText>
                </div>
              </Col>
              <Col md="4" sm="6" className="pb-4">
                <div className="cardFeature" data-aos='fade-up' data-aos-delay='300' data-aos-duration='2500'>
                  <img src={icon4} className="imageIcon" />
                  <CardText tag="h4" className="textPrim fw-bold py-2">Easy To Use</CardText>
                  <CardText tag="p" className="font-size-14">We make it seamless for you and your customers with our easy-to-setup booking forms</CardText>
                </div>
              </Col>
              <Col md="4" sm="6" className="pb-4">
                <div className="cardFeature" data-aos='fade-up' data-aos-delay='400' data-aos-duration='3000'>
                  <img src={icon5} className="imageIcon" />
                  <CardText tag="h4" className="textPrim fw-bold py-2">Recurring Options</CardText>
                  <CardText tag="p" className="font-size-14">Give your customers priority service by allowing them to book multiple slots at once.</CardText>
                </div>
              </Col>
              <Col md="4" sm="6" className="pb-4">
                <div className="cardFeature"  data-aos='fade-up' data-aos-delay='500' data-aos-duration='3000'>
                  <img src={icon6} className="imageIcon" />
                  <CardText tag="h4" className="textPrim fw-bold py-2">Group Bookings</CardText>
                  <CardText tag="p" className="font-size-14">Book group events such as webinars, workshops, and course sessions with a capacity of your choice.</CardText>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='bg-white py-5'>
          <Container className='overflow-hidden'>
            <h2 className='textPrim text-center'>تصور ودعم فهم الطالب</h2>
            <Row className='justify-content-between pt-5'>
              <Col lg="5">
                <img src={image4} className="img-fluid mb-4" data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="2000" />
              </Col>
              <Col lg="6">
                <div data-aos="fade-left" dir='rtl'
                className='px-2'
                data-aos-delay="200"
                data-aos-duration="2000">
                  <ul className='pe-lg-0'>
                    <li className='pb-3'>
                      <CardText tag="p" className='font-size-18'>
                      استخدم الرؤى من أكثر من 20 تقييمًا تكوينيًا وميزات وسائط ديناميكية لتوجيه التدريس وتحسين نتائج الطلاب
                      </CardText>
                    </li>
                    <li className='pb-3'>
                      <CardText tag="p" className='font-size-18'>                                         
                        تكييف التعليمات أو معالجة المفاهيم الخاطئة بسرعة
                      </CardText>
                    </li>
                    <li className='pb-3'>
                      <CardText tag="p" className='font-size-18'>                   
                      التفرقة بين الطلاب أو إثرائهم أو تقديم دعم إضافي لمقابلة الطلاب في المكان الذي يتواجدون فيه ومن أي مكان يتعلمون فيه (الفصل الدراسي المادي ، أو عن بُعد ، أو المختلط)
                      </CardText>
                    </li>
                  </ul>
                  <Link to="/register">
                    <button className="height56 btnGetStarted px-5 border-0 fw-bold">
                      إبدأ الآن مجانا
                    </button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* Footer */}
      <div className="footerHome" dir='rtl'>
        <div className="container pt-4 overflow-hidden">
            <div className="row justify-content-between">
                <div className="col-lg-6 px-3">
                    <img src={logoImage} alt="" data-aos="fade-left"
                      data-aos-delay="200"
                      data-aos-duration="2000" />
                    <p className="text-white opacity-75 pt-4">
                    يساعد Learn with me الطلاب على التواصل مع المدرس على نطاق واسع من خلال هياكل العمولات المخصصة لبرنامج التسويق عبر الشركاء التابعين والمؤثرين لعلامات التجارة الإلكترونية.
                    </p>
                </div>
                <div className="col-lg-3 text-end px-3">
                    <p className="text-white opacity-75">يمكنك التواصل معنا</p>
                    <p>
                      <Link className="text-white text-decoration-none px-2" to={""} alt="">
                          <i className="fab fa-facebook fa-lg"></i>
                      </Link>
                      <Link className="text-white text-decoration-none px-2" to={""} alt="">
                          <i className="fab fa-instagram fa-lg"></i>
                      </Link>
                      <Link className="text-white text-decoration-none px-2" to={""} alt="">
                          <i className="fab fa-twitter fa-lg"></i>
                      </Link>
                    </p>
                </div>
            </div>
            <div className="border-top mt-4 border-secondary d-sm-flex justify-content-between text-start" dir="rtl">
                <div className="pt-3 text-end">
                    <Link className="text-white opacity-75 text-decoration-none px-2" to={""} alt="">عن الموقع</Link>
                    <Link className="text-white opacity-75 text-decoration-none px-2" to={"/register"} alt=""> التسجيل </Link>
                    <Link className="text-white opacity-75 text-decoration-none px-2" to={"/login"} alt=""> دخول </Link>
                </div>
                <p className="text-white pt-3 opacity-75 text-end">جميع الحقوق محفوظة @ Learn with me {new Date().getFullYear()}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home