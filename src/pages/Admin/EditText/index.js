
import React from "react";
import PageCompoent from "../pageCompoent"
import LessonService from "../../../services/Admin/LessonService"

const EditVoice = (props) => {
  return <PageCompoent
    Service={LessonService}
    type={"مرحبا بك فى تعديل النص"}
    placeholder={"تعديل النص"}
    header={"تعديل النص"}
    // type={"تعديل النص"}
    // header={"تعديل النص"}
    // subtitle={"تعديل النص"}
    // placeholder={"تعديل النص"}
    number={1}

  />

}

export default EditVoice

