import React from "react";
import { FaLockOpen, FaLock } from "react-icons/fa";

export default function SelectBox({ selectOption = [] }) {
  const UnfoldSelect = () => {
    let selectBox = document.getElementById("selcet_box");

    if (!selectBox.classList.contains("unfolded")) {
      selectBox.classList.add("unfolded");
    } else {
      selectBox.classList.remove("unfolded");
    }
  };

  return (
    <div id="selcet_box" className="select_box" onClick={UnfoldSelect}>
      <div className="select">
        <span className={`color_circle`} />
        some test text
      </div>
      <div className="options">
        <p className="option"><FaLockOpen/> public</p>
        <p className="option"><FaLock/> private</p>
      </div>
    </div>
  );
}
