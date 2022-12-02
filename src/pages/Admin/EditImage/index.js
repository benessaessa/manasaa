
import React from "react";
import PageCompoent from "../pageCompoent"
import LessonService from "../../../services/Admin/LessonService"

const EditImage = (props) => {
  return <PageCompoent
    Service={LessonService}
    placeholder={"تحرير الصورة"}
    header={"تحرير الصورة"}
    type={"تحرير الصورة"}
    subtitle={"تحرير الصورة"}
    number={3}

  />

}

export default EditImage

