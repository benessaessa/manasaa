
import React from "react";
import PageCompoent from "../pageCompoent"
import LessonService from "../../../services/Admin/LessonService"

const EditImage = (props) => {
  return <PageCompoent
    Service={LessonService}
    type={"مرحبا بك فى تعديل الصورة"}
    placeholder={"تعديل الصورة"}
    header={"تعديل الصورة"}
    type={"تعديل الصورة"}
    header={"تعديل الصورة"}
    subtitle={"تعديل الصورة"}
    placeholder={"تعديل الصورة"}
    number={3}

  />

}

export default EditImage

