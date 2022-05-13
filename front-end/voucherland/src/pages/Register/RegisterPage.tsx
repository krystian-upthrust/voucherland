import React, {ChangeEvent, FormEvent, useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {ROUTE_HOME, ROUTE_LOGIN} from "../../utils/routes";
import {FiArrowLeft} from "react-icons/fi";
import {IUser} from "../../utils/types";
import axios from "axios";
import {Input} from "../../components/Global/Input";

export default function RegisterPage() {
    const navigate = useNavigate();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [disable, setDisable] = useState<boolean>(true);

    useEffect(() => {
        if (name == "" || email == "" || password == "" || confirmPassword == "") {
            setDisable(true);
        } else setDisable(false);
    }, [name, email, password, confirmPassword]);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO
        // write front end validations
        // split name into firstname and lastname
        // validate password with confirm password
        // when error occurs at one of the inputs ... red border
        // make input a costum styled component

        const index = name.indexOf(' ');
        const firstname = name.slice(0, index).trim();
        const lastname = name.slice(index + 1, name.length).trim();

        const user: IUser = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            is_admin: false
        };

        axios.post('http://127.0.0.1:8000/api/users', user, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(response => {
            if (response.status === 201) {
                navigate(ROUTE_LOGIN);
            }
        });
    };

    return (
        <section className="register">
            <div className="login_register_image"/>
            <div className="login_register_shadow"/>

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
                    error={false}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                />
                <Input
                    type={"password"}
                    placeholder={"confirm password"}
                    test_id={"register-confirmpassword-input"}
                    error={false}
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
