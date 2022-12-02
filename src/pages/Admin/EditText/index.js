
import React from "react";
import PageCompoent from "../pageCompoent"
import LessonService from "../../../services/Admin/LessonService"

const EditVoice = (props) => {
  return <PageCompoent
    Service={LessonService}
    type={"تعديل النص"}
    placeholder={"تعديل النص"}
    header={"تعديل النص"}
    subtitle={"تعديل النص"}
    number={1}

  />

}

export default EditVoice

