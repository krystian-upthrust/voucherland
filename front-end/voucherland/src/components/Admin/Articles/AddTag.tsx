import React, { useState } from "react";

const tagsColors: { color: string }[] = [
  {
    color: "red",
  },
  {
    color: "blue",
  },
  {
    color: "green",
  },
  {
    color: "yellow",
  },
];

interface AddTagProps {
  handleCancelPressed: () => void;
  handleAddPressed: () => void;
}

export default function AddTag({
  handleCancelPressed,
  handleAddPressed,
}: AddTagProps) {
  const [selectColor, setSelectColor] = useState<string>("");

  const UnfoldSelect = () => {
    let selectColor = document.getElementById("selcet_color")!;

    if (!selectColor.classList.contains("unfolded")) {
      selectColor.classList.add("unfolded");
    } else {
      selectColor.classList.remove("unfolded");
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
            <div
              id="selcet_color"
              className="select_box "
              onClick={UnfoldSelect}
            >
              <div className="select">
                <span className={`color_circle ${selectColor}`} />
                {selectColor === null ? "select color" : selectColor}
              </div>
              <div className="options">
                {tagsColors.map((color) => {
                  return (
                    <p
                      className="option"
                      onClick={() => setSelectColor(color.color)}
                    >
                      <span className={`color_circle ${color.color}`} />
                      {color.color}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className="cancel" onClick={handleCancelPressed}>
              cancel
            </button>
            <button className="add_btn" onClick={handleAddPressed}>
              add tag
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
