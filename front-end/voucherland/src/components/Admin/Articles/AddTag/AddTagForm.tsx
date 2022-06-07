import React, {useState, MouseEvent, ChangeEvent} from "react";
import {AuthApi} from "../../../../utils/axios/Axios";
import {RequestRoutes} from "../../../../utils/axios/RequestRoutes";
import {Input} from "../../../Global/Input";
import {AxiosResponse} from "axios";
import {LocalStorageService} from "../../../../utils/LocalStorageService";

interface AddTagFormProps {
  handleCancelPressed: (value: boolean) => void;
}

export default function AddTagForm({
  handleCancelPressed,
}: AddTagFormProps) {
  const [name, setName] = useState<string>("");
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

  const handleAddPressed :  React.FormEventHandler<HTMLFormElement> = (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (LocalStorageService.getAccessToken()) {
      AuthApi
          .post(RequestRoutes.PostNewTag, {
            title: name.toLowerCase(),
            color: selectColor.toLowerCase()
          })
          .then( () => {
            handleCancelPressed(false);
          });
    }
  }

  return (
    <form data-testid="addtag-form" onSubmit={handleAddPressed}>
      <div className="name">
        <label htmlFor="name" data-testid="addtag-name-label">name</label>
        <Input
            type={"text"}
            placeholder={"name"}
            test_id={"addtag-name-input"}
            error={false}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
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
          onClick={()=>{handleCancelPressed(false)}}
        >
          cancel
        </button>
        <button
            type={"submit"}
          className="add_btn"
          data-testid="addtag-add-btn"
        >
          add tag
        </button>
      </div>
    </form>
  );
}
