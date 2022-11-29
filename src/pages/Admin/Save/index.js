
import React from "react";
import PageCompoent from "../pageCompoent"
import LessonService from "../../../services/Admin/LessonService"

const Save = (props) => {
  return <PageCompoent
    Service={LessonService}
    type={"مرحبا بك فى تعديل الحفظ والمشاركة"}
    placeholder={"تعديل الحفظ والمشاركة"}
    header={"تعديل الحفظ والمشاركة"}
    type={"تعديل الحفظ والمشاركة"}
    header={"تعديل الحفظ والمشاركة"}
    subtitle={"تعديل الحفظ والمشاركة"}
    placeholder={"تعديل الحفظ والمشاركة"}
    number={6}

  />

}

export default Save

