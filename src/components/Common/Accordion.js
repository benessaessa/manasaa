import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./style.scss";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "activeAcc" : "");
    setHeightState(
      setActive === "activeAcc" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "activeAcc" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
      <button className={`mb-3 accordion bg-white mt-3 ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}
        <button className="btn btn-primary">إضافة سؤال</button>
        </p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        {/* <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        /> */}
        <iframe width="100%" height="500" src={props.content} frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default Accordion;