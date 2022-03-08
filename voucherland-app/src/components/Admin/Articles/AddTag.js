import React, { useState } from "react";

export default function AddTag() {
  const [selectValue, setSelectValue] = useState(null);

  const UnfoldSelect = () => {
    let selectBox = document.getElementById("selcet_box");

    if (!selectBox.classList.contains("unfolded")) {
      console.log("hi");
      selectBox.classList.add("unfolded");
    } else {
      selectBox.classList.remove("unfolded");
    }
  };

  return (
    <section className="add_tag_popup">
      <div className="tag_form">
        <h3>Add tag</h3>
        <form>
          <div className="name">
            <label htmlFor="name">name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="color">
            <label htmlFor="color">color</label>
            <div id="selcet_box" className="select_box" onClick={UnfoldSelect}>
              <div className="select">
                <span className={`color_circle ${selectValue}`} />
                {selectValue === null ? "select color" : selectValue}
              </div>
              <div className="options">
                <p className="option" onClick={() => setSelectValue("red")}>
                  <span className="color_circle red" /> red
                </p>
                <p className="option" onClick={() => setSelectValue("blue")}>
                  <span className="color_circle blue" /> blue
                </p>
                <p className="option" onClick={() => setSelectValue("green")}>
                  <span className="color_circle green" /> green
                </p>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className="cancel">cancel</button>
            <button className="add_btn">add tag</button>
          </div>
        </form>
      </div>
    </section>
  );
}
