import React, {useContext, useState, ChangeEvent, useEffect} from "react";
import {UserContext} from "../../../utils/context/UserContext";
import {Input} from "../../Global/Input";
import {ValidatePassword} from "../../../utils/InputValidations/PasswordValidation";
import {AuthApi} from "../../../utils/axios/Axios";
import {RequestRoutes} from "../../../utils/axios/RequestRoutes";
import {IUser} from "../../../utils/types";

export default function Settings() {
    const userContext = useContext(UserContext);

    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
    const [correctPassword, setCorrectPassword] = useState<boolean>(false);
    const [validPassword, setValidPassword] = useState<boolean>(false);
    const [disable, setDisable] = useState<boolean>(true);


    /**
     * 1. Disables the submit button if at least one of the inputs is empty
     * 2. Sets the state to true, if the confirmes password matches the entered password
     */
    useEffect(() => {
        if (newPassword === "" || confirmNewPassword === "") {
            setDisable(true);
            setCorrectPassword(false)
            return;
        }
        setDisable(false);
        setCorrectPassword(newPassword !== confirmNewPassword);
    }, [newPassword, confirmNewPassword]);


    /**
     * Checks if the confirmed password equals to the entered password
     * If yes, the correct password state will be set to false
     */
    useEffect(() => {
        if (newPassword === "" || confirmNewPassword === "") return setCorrectPassword(false);
        setCorrectPassword(newPassword !== confirmNewPassword);
    }, [confirmNewPassword, newPassword]);


    /**
     * When the password input is updated,
     * function checks if the password is valid.
     */
    useEffect(() => {
        if (newPassword === "" ) return setValidPassword(false);
        setValidPassword(!ValidatePassword(newPassword));
    }, [newPassword]);


    /**
     * Sends a put request to updates the newly entered password
     */
    const handleChanges = () => {
        const updatedUser : IUser = {
            id: userContext?.user?.id,
            firstname : userContext?.user?.firstname!,
            lastname: userContext?.user?.lastname!,
            email : userContext?.user?.email!,
            password : newPassword,
            is_admin : userContext?.user?.is_admin!
        }

        if (validPassword) {
            AuthApi
                .put(RequestRoutes.updateUser.replace(":id", String(userContext?.user?.id)), updatedUser)
                .then(() => {
                    console.log("changes applied")
                });
        }
    }

    return (
    <article className="settings">
      <h3>Account settings</h3>

      <div className="email">
        <label htmlFor="email"> email </label>
        <input type="email" id="email" placeholder={`${userContext?.user?.email}`} disabled />
      </div>

      <div className="password">
        <label htmlFor="password"> password </label>
          <Input
              type={"password"}
              placeholder={"password"}
              test_id={"account-setting-password-input"}
              error={validPassword}
              value={newPassword}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setNewPassword(event.target.value)}
          />
      </div>

      <div className="password">
        <label htmlFor="password"> password </label>
          <Input
              type={"password"}
              placeholder={"confirm password"}
              test_id={"account-setting-confirmpassword-input"}
              error={correctPassword}
              value={confirmNewPassword}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setConfirmNewPassword(event.target.value)}
          />
      </div>

      <button
          className="settings_save_btn"
          onClick={handleChanges}
          disabled={disable}
      >Save changes</button>
    </article>
  );
}
