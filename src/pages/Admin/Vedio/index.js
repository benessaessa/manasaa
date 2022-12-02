
import React from "react";
import PageCompoent from "../pageCompoent"
import LessonService from "../../../services/Admin/LessonService"

const EditVoice = (props) => {
  return <PageCompoent
    Service={LessonService}
    placeholder={"تحرير الفيديو"}
    header={"تحرير الفيديو"}
    type={"تحرير الفيديو"}
    subtitle={"تحرير الفيديو"}
    number={4}

  />

}

export default EditVoice

