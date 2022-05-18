import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {ROUTE_HOME, ROUTE_LOGIN} from "../../utils/routes";
import {FiArrowLeft} from "react-icons/fi";
import { IName } from "../../utils/types";
import {Input} from "../../components/Global/Input";

import { ValidatePassword } from "../../utils/InputValidations/PasswordValidation";
import {RequestRoutes} from "../../utils/axios/RequestRoutes";
import {BasicUrl} from "../../utils/axios/Axios";

export default function RegisterPage() {
    const navigate = useNavigate();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [disable, setDisable] = useState<boolean>(true);
    const [correctPassword, setCorrectPassword] = useState<boolean>(false);
    const [validPassword, setValidPassword] = useState<boolean>(false);

    /**
     * Disables the submit button if at least one of the inputs is empty.
     */
    useEffect(() => {
        if (name == "" || email == "" || password == "" || confirmPassword == "") {
            setDisable(true);
        } else setDisable(false);
    }, [name, email, password, confirmPassword]);


    /**
     * When the password input is updated,
     * function checks if the password is valid.
     */
    useEffect(() => {
        if (password === "" ) return setValidPassword(false);
        setValidPassword(!ValidatePassword(password));
    }, [password]);


    /**
     * Checks if the confirmed password equals to the entered password.
     * If yes, it will set the correctPassword state to false.
     */
    useEffect(() => {
        if (password === "" || confirmPassword === "") return setCorrectPassword(false);
        setCorrectPassword(password !== confirmPassword);
    }, [password, confirmPassword]);


    /**
     * Slices the entered name into firstname and lastname
     *
     * @return IName
     */
    function SplitName(): IName {
        let slicedName : IName = {
            firstname: "",
            lastname: ""
        };

        const index = name.indexOf(' ');
        slicedName.firstname = name.slice(0, index).trim();
        slicedName.lastname = name.slice(index + 1, name.length).trim();

        return slicedName;
    }


    /**
     * Sends a post request to register a user.
     *
     * @param event
     */
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        BasicUrl
            .post(
            RequestRoutes.REGISTER,
            {
                firstname: SplitName().firstname,
                lastname: SplitName().lastname,
                email: email,
                password: password,
                is_admin: false
            })
            .then(response => {
                if (response.status === 201) {
                    navigate(ROUTE_LOGIN);
                }
            });
    };

    return (
        <section className="register">
            <div className="login_register_image" />
            <div className="login_register_shadow" />

            <form onSubmit={handleSubmit}>
                <h2>Register</h2>

                <Input
                    type={"text"}
                    placeholder={"name"}
                    test_id={"register-name-input"}
                    error={false}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                />
                <Input
                    type={"email"}
                    placeholder={"email"}
                    test_id={"register-email-input"}
                    error={false}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                />
                <Input
                    type={"password"}
                    placeholder={"password"}
                    test_id={"register-password-input"}
                    error={validPassword}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                />
                <Input
                    type={"password"}
                    placeholder={"confirm password"}
                    test_id={"register-confirmpassword-input"}
                    error={correctPassword}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setConfirmPassword(event.target.value)}
                />

                <button
                    type="submit"
                    className="register_btn"
                    data-testid="register-register-btn"
                    disabled={disable}
                >
                    register
                </button>
            </form>

            <div className="option">
                <p>already have an account? </p>
                <button
                    className="option_btn"
                    data-testid="register-login-btn"
                    onClick={() => navigate(ROUTE_LOGIN)}
                >
                    login
                </button>
            </div>

            <button
                className="back_btn"
                data-testid="register-goback-btn"
                onClick={() => navigate(ROUTE_HOME)}
            >
                <FiArrowLeft/> go back
            </button>
        </section>
    )
        ;
}
