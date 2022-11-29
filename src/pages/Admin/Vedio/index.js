
import React from "react";
import PageCompoent from "../pageCompoent"
import LessonService from "../../../services/Admin/LessonService"

const EditVoice = (props) => {
  return <PageCompoent
    Service={LessonService}
    type={"مرحبا بك فى تعديل الفيديو"}
    placeholder={"تعديل الفيديو"}
    header={"تعديل الفيديو"}
    type={"تعديل الفيديو"}
    header={"تعديل الفيديو"}
    subtitle={"تعديل الفيديو"}
    placeholder={"تعديل الفيديو"}
    number={4}

  />

}

export default EditVoice

