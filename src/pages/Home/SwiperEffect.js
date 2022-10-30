import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "./swiper.scss";
import "swiper/swiper.min.css";
import "swiper/modules/free-mode/free-mode.min.css";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/thumbs/thumbs.min.css";
import "swiper/swiper-bundle.css";
import asyncImage from "assets/images/icon5.png";
import degreeImage from "assets/images/icon7.png";
import calendarImage from "assets/images/icon6.png";
import featureImage from "assets/images/feature.png";
import featureImage2 from "assets/images/feature2.png";
import featureImage3 from "assets/images/feature3.png";
import featureImage4 from "assets/images/feature4.png";
import moueImage from "assets/images/mouse.png";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const SwiperEffect = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="container" dir="rtl">
      <h2 className="textPrimLight text-center pt-5 pb-4 fw-bold">
        يمكنك إستخدام Learn with me في ....
      </h2>
      <Swiper
        data-aos='fade-up' data-aos-delay='200' data-aos-duration='2000'
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div className="card py-4 px-3">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={featureImage}
                  className="img-fluid d-none d-md-block"
                />
              </div>
              <div className="col-md-8 pt-4">
                <img src={moueImage} className="img-fluid" />
                <h4 className="textPrim fw-bold pb-2 pt-3">
                  إختبار الطالب
                </h4>
                <p>
                احصل على الاختبار التالي بنقرة زر واحدة.
                  ما عليك سوى مشاركة رابط الحجز الخاص بك أو تضمينه في
                  موقع الويب مع التوافر المطلوب. بكل بساطة.
                </p>
                <p className="textPrim">Start my free trial <i className="fa fa-arrow-right ps-2 font-size-14"></i></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-4 px-3">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={featureImage2}
                  className="img-fluid d-none d-md-block"
                />
              </div>
              <div className="col-md-8 pt-4">
                <img src={asyncImage} className="img-fluid" />
                <h4 className="textPrim fw-bold pb-2 pt-3">
                  Teacher assistant
                </h4>
                <p>
                  Say goodbye to one-time Teacher only. Allow your students
                  to book a package of sessions any time all at
                  once. You can easily create recurring sessions with this handy
                  feature.
                </p>
                <p className="textPrim">Start my free trial <i className="fa fa-arrow-right ps-2 font-size-14"></i></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-4 px-3">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={featureImage3}
                  className="img-fluid d-none d-md-block"
                />
              </div>
              <div className="col-md-8 pt-4">
                <img src={degreeImage} className="img-fluid" />
                <h4 className="textPrim fw-bold pb-2 pt-3">Course Scheduler</h4>
                <p>
                  Say goodbye to one-time appointments only. Allow your clients
                  to book a package of sessions or weekly appointments all at
                  once. You can easily create recurring sessions with this handy
                  feature. Class reaching capacity? You also have the option to
                  add a waitlist, in case of any participant changes.
                </p>
                <p className="textPrim">Start my free trial <i className="fa fa-arrow-right ps-2 font-size-14"></i></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card py-4 px-3">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={featureImage4}
                  className="img-fluid d-none d-md-block"
                />
              </div>
              <div className="col-md-8 pt-4">
                <img src={calendarImage} className="img-fluid" />
                <h4 className="textPrim fw-bold pb-2 pt-3">
                  Calendar Management
                </h4>
                <p>
                  Want to view your upcoming bookings for the week, month, or
                  year? Stay organized and on track with the calendar manager
                  that allows you to filter events, reschedule, cancel
                  appointments, and more.
                </p>
                <p className="textPrim">Start my free trial <i className="fa fa-arrow-right ps-2 font-size-14"></i></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperEffect;
