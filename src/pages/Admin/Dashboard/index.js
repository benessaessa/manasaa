import React from "react"
import {
  Col,
  Container, Row,
} from "reactstrap"

const Dashboard = props => {

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>

          <h3 className="text-end text-primary fw-bold">How Does Learn with me work ? كيف تعمل المنصة</h3>
          <Row className="pt-4 text-end">
            <Col md={6} className="pb-2">
              <div className="card shdow p-3" data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000">
                <h4 className="fw-bold">Diagnostics  التشخيص</h4>
                <h5 className="pt-2">هنا المتعلمين يبدأو بتكميل استمارات تشخيص التي تحدد بشكل سريع الفجوات 
                  المعرفية وسوء الفهم وفي نفس الوقت تساعد هذه المنصة علي التوجيه بضرورة توفر أدوات التعلم 
                  الجيدة للتعليم الفردي
                </h5>
              </div>
            </Col>
            <Col md={6} className="pb-2">
              <div className="card shdow p-3" data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000">
                <h4 className="fw-bold">Leadership Dashboard  لوحدة إعداد القادة</h4>
                <h5 className="pt-2 pb-3">
                  وهنا علي القادة الكبار والقادة التابعون لهم ان يحصلوا علي نظرة شاملة لأداء ومشاركة مستوي المتعلمين 
                  في المادة التعليمية والحجرة الدراسية
                </h5>
              </div>
            </Col>
            <Col md={6} className="pb-2">
              <div className="card shdow p-3" data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="2000">
                <h4 className="fw-bold">Recommended Path  المسار (الطريق) الموصي به</h4>
                <h5 className="opacity-75 pt-2">
                  وهذه طرقة ونهج مناسب وشخصي ومستمر يحتوي علي مجموعة دروس صغية مصممة لعلاج نقاط الضعف والفجوات المعرفية 
                  وتزود وتدفع وتحافظ علي الذاكرة طويلة المدي
                </h5>
              </div>
            </Col>
            <Col md={6} className="pb-2">
              <div className="card shdow p-3" data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="2000">
                <h4 className="fw-bold"> Achievments  الإنجازات</h4>
                <h5 className="opacity-75 pt-2">
                  يتم إعطاء مكافأة المتعلمين بمجموعة علامات وإشارات وشرائط (أشرطة) تعلق لإكمال الدروس الصغيرة مع استخدام 
                  المنصة لفترة محددة من الوقت لزيادة المشاركة والدوافع
                </h5>
              </div>
            </Col>
            <Col md={12}>
              <div className="card shdow p-3" data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="3000">
                <h4 className="fw-bold"> Teacher Dashboard  لوحة المعلم</h4>
                <h5 className="opacity-75 pt-2">
                  هنا يستخدم المعلم (كتاب لتدوين علامات) ليراقب تحركات المتعلمين بشكل فردي 
                  أو الفصل ككل مستعينا ب (في نطاق لوحة تدوين العلامات)
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}
export default Dashboard;