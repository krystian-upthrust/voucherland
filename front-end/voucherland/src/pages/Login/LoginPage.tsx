import React, {ChangeEvent, useContext, useEffect, useState, MouseEvent} from "react";
import {useNavigate} from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";


import {ROUTE_HOME, ROUTE_REGISTER} from "../../utils/routes";
import {IUser} from "../../utils/types";
import {UserContext} from "../../utils/context/UserContext";
import axios from "axios";
import {Input} from "../../components/Global/Input";
import {CheckBox} from "../../components/Global/CheckBox";
import {isBooleanObject} from "util/types";
import {isBoolean} from "util";
import {LocalStorageService} from "../../utils/LocalStorageService";
import {AuthUser} from "../../utils/axios/Axios";
import {RequestRoutes} from "../../utils/axios/RequestRoutes";

export default function LoginPage() {
    const navigate = useNavigate();

    const userContext = useContext(UserContext);

    const [emailValue, setEmailValue] = useState<string>("regular.user@voucherland.com");
    const [passwordValue, setPasswordValue] = useState<string>("iamuser");

    const [remember, setRemember] = useState<boolean>(false);

    const [disable, setDisable] = useState<boolean>(true);

    const [status, setStatus] = useState<number>(404);


    useEffect(() => {
        if (emailValue === "" || passwordValue === "") {
            setDisable(true);
        } else setDisable(false);
    }, [emailValue, passwordValue]);

    const handleLogin: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        let credentials = {
            email: emailValue,
            password: passwordValue,
        };

        AuthUser
            .post(RequestRoutes.LOGIN, credentials)
            .then(response => {
                LocalStorageService.setToken({
                    "access_token": response.data.access_token,
                    "refresh_token": response.data.refresh_token
                });

                if (response.status === 200) {
                    userContext?.setLoggedIn(true);
                    // getUser();
                    navigate(ROUTE_HOME);
                }
            });


        // userContext?.setLoggedIn(true);
        // userContext?.setUser(user);

        // localStorage.setItem("logstate", "true");
        // localStorage.setItem("user", JSON.stringify(user));


    };

    const getUser = () => {
        const type = localStorage.getItem('token_type');
        const token = localStorage.getItem('access_token');
        axios.get('http://127.0.0.1:8000/api/auth/me', {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `${type} ${token}`
            }
        }).then(repsonse => {
            console.log(repsonse);
        })
    };

    function handleRemember(event: MouseEvent<HTMLDivElement>) {
        event.preventDefault();

        localStorage.setItem('remember', (!remember ? "0" : "1"));
        LocalStorageService.setRememberMe()

        // de- & encrypting password
        // import CryptoJS from "crypto-js";
        // const code = CryptoJS.AES.encrypt("hi", "123");
        // console.log(code.toString());
        // const decode = CryptoJS.AES.decrypt(code, "123").toString(CryptoJS.enc.Utf8);
        // console.log(decode);

        setRemember(!remember);
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
        ;
}
