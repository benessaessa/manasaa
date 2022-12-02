
import React from "react";
import PageCompoent from "../pageCompoent"
import LessonService from "../../../services/Admin/LessonService"

const EditVoice = (props) => {
  return <PageCompoent
    Service={LessonService}
    type={"تحرير النص"}
    placeholder={"تحرير النص"}
    header={"تحرير النص"}
    subtitle={"تحرير النص"}
    number={1}

  />

}

export default EditVoice

