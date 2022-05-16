import React, {ChangeEvent, useContext, useEffect, useState, MouseEvent} from "react";
import {useNavigate} from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";
import CryptoJS from "crypto-js";

import {ROUTE_HOME, ROUTE_REGISTER} from "../../utils/routes";
import {ERememberMe} from "../../utils/types";
import {UserContext} from "../../utils/context/UserContext";
import axios from "axios";
import {Input} from "../../components/Global/Input";
import {CheckBox} from "../../components/Global/CheckBox";
import {LocalStorageService} from "../../utils/LocalStorageService";
import {AuthUser} from "../../utils/axios/Axios";
import {RequestRoutes} from "../../utils/axios/RequestRoutes";

export default function LoginPage() {
    const navigate = useNavigate();

    const userContext = useContext(UserContext);

    const [emailValue, setEmailValue] = useState<string>("");
    const [passwordValue, setPasswordValue] = useState<string>("");
    const [remember, setRemember] = useState<boolean>(false);
    const [disable, setDisable] = useState<boolean>(true);


    useEffect(() => {
        const userLogin = LocalStorageService.getUserLogin();
        setEmailValue(userLogin.email);
        setPasswordValue(CryptoJS.AES.decrypt(userLogin.password, "12EA5GT89").toString(CryptoJS.enc.Utf8));
    }, []);

    useEffect(() => {
        if (emailValue === "" || passwordValue === "") {
            setDisable(true);
        } else setDisable(false);
    }, [emailValue, passwordValue]);

    const handleLogin: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        AuthUser
            .post(RequestRoutes.LOGIN, {
                email: emailValue,
                password: passwordValue,
            })
            .then(response => {
                LocalStorageService.setToken({
                    "access_token": response.data.access_token,
                    "refresh_token": response.data.refresh_token
                });

                userContext!.setLoggedIn(true);
                getUser();

                // saves user-login after credentials are accepted
                if(remember) saveUserLogin();

                navigate(ROUTE_HOME);
            });
    };

    const getUser = () => {
        const token = localStorage.getItem('access_token');
        if(token) {
            axios.get('http://127.0.0.1:8000/api/auth/me', {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }).then( response => {
                userContext!.setUser(response.data.user);
            });
        }
    };

    /**
     * Saves the users choose of being remembered in local storage
     *
     * @param event
     */
    function handleRemember(event: MouseEvent<HTMLDivElement>) {
        event.preventDefault();
        LocalStorageService.setRememberMe(ERememberMe.REMEMBER);
        setRemember(!remember);
    }

    /**
     * Saved user entered email and encrypted password in local storage
     */
    function saveUserLogin() {
        const email =  emailValue;
        const password = CryptoJS.AES.encrypt(passwordValue, "12EA5GT89").toString();

        LocalStorageService.setUserLogin({email, password});
    }

    return (
        <section className="login">
            <div className="login_register_image"/>
            <div className="login_register_shadow"/>

            <form onSubmit={handleLogin}>
                <h2>Login</h2>

                <Input
                    type={"email"}
                    placeholder={"email"}
                    value={emailValue}
                    test_id={"login-email-input"}
                    cy_id={"login-email-input"}
                    error={false}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setEmailValue(event.target.value)}
                />
                <Input
                    type={"password"}
                    placeholder={"password"}
                    value={passwordValue}
                    test_id={"login-password-input"}
                    cy_id={"login-password-input"}
                    error={false}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setPasswordValue(event.target.value)}
                />

                <div className="checkbox_container">
                    <CheckBox
                        remember={remember}
                        onClick={handleRemember}
                    />
                    <p>forgot password?</p>
                </div>

                <button
                    type="submit"
                    id="login_btn"
                    className="login_btn"
                    data-testid="login-login-btn"
                    data-cy="login-login-btn"
                    disabled={disable}
                >
                    login
                </button>
            </form>

            <div className="option">
                <p>no account yet?</p>
                <button
                    className="option_btn"
                    data-testid="login-register-btn"
                    onClick={() => navigate(ROUTE_REGISTER)}
                >
                    register
                </button>
            </div>

            <button
                className="back_btn"
                data-testid="login-goback-btn"
                onClick={() => navigate(ROUTE_HOME)}
            >
                <FiArrowLeft className="back_btn_arrow"/> go back
            </button>
        </section>
    )
}
