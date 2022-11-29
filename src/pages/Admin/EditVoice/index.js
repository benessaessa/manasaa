
import React from "react";
import PageCompoent from "../pageCompoent"
import LessonService from "../../../services/Admin/LessonService"

const EditVoice = (props) => {
  return <PageCompoent
    Service={LessonService}
    type={"مرحبا بك فى تعديل الصوت"}
    placeholder={"تعديل الصوت"}
    header={"تعديل الصوت"}
    type={"تعديل الصوت"}
    header={"تعديل الصوت"}
    subtitle={"تعديل الصوت"}
    placeholder={"تعديل الصوت"}
    number={2}

  />

}

export default EditVoice

