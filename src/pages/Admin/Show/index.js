
import React from "react";
import PageCompoent from "../pageCompoent"
import LessonService from "../../../services/Admin/LessonService"

const Show = (props) => {
  return <PageCompoent
    Service={LessonService}
    type={"مرحبا بك فى تعديل العرض الترفيهى"}
    placeholder={"تعديل العرض الترفيهى"}
    header={"تعديل العرض الترفيهى"}
    type={"تعديل العرض الترفيهى"}
    header={"تعديل العرض الترفيهى"}
    subtitle={"تعديل العرض الترفيهى"}
    placeholder={"تعديل العرض الترفيهى"}
    number={5}

  />

}

export default Show

