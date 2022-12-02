
import React from "react";
import PageCompoent from "../pageCompoent"
import LessonService from "../../../services/Admin/LessonService"

const EditVoice = (props) => {
  return <PageCompoent
    Service={LessonService}
    placeholder={"تحرير الصوت"}
    header={"تحرير الصوت"}
    type={"تحرير الصوت"}
    subtitle={"تحرير الصوت"}
    number={2}

  />

}

export default EditVoice

