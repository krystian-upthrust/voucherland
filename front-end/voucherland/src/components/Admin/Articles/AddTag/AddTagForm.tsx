import React, { useState } from "react";

interface AddTagFormProps {
  handleCancelPressed: () => void;
  handleAddPressed: () => void;
}

export default function AddTagForm({
  handleCancelPressed,
  handleAddPressed,
}: AddTagFormProps) {
  const [selectColor, setSelectColor] = useState<string>("");

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

  const UnfoldSelect = () => {
    let selectColor = document.getElementById("selcet_color")!;

    if (!selectColor.classList.contains("unfolded")) {
      selectColor.classList.add("unfolded");
    } else {
      selectColor.classList.remove("unfolded");
    }
  };

  return (
    <form data-testid="addtag-form">
      <div className="name">
        <label htmlFor="name" data-testid="addtag-name-label">name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          data-testid="addtag-name-input"
        />
      </div>
      <div className="color">
        <label htmlFor="color" data-testid="addtag-color-label">color</label>
        <div
          id="selcet_color"
          className="select_box"
          data-testid="addtag-color-select"
          onClick={UnfoldSelect}
        >
          <div className="select">
            <span className={`color_circle ${selectColor}`} />
            {selectColor === null ? "select color" : selectColor}
          </div>
          <div className="options">
            {tagsColors.map((color, index) => {
              return (
                <p
                  className="option"
                  onClick={() => setSelectColor(color.color)}
                  key={index}
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
        <button
          className="cancel"
          data-testid="addtag-cancel-btn"
          onClick={handleCancelPressed}
        >
          cancel
        </button>
        <button
          className="add_btn"
          data-testid="addtag-add-btn"
          onClick={handleAddPressed}
        >
          add tag
        </button>
      </div>
    </form>
  );
}
