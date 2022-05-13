import React, {MouseEvent, useEffect, useState} from "react";

import {instance} from "./../../utils/axios/Axios";
import {RequestRoutes} from "../../utils/axios/RequestRoutes";
import {LocalStorageService} from "../../utils/LocalStorageService";

interface CheckBoxProps {
    remember : boolean
    onClick: (event : MouseEvent<HTMLDivElement>) => void;
}

export function CheckBox ({ remember, onClick }:CheckBoxProps) {

    const [rememberMe, setRememberMe] = useState<boolean>(false);

    useEffect(() => {
        LocalStorageService.checkRememberMe();
        setRememberMe(LocalStorageService.getRememberMe());
        console.log([rememberMe, remember]);
    }, [remember]);

    async function getall () {
        const data = await instance.get(RequestRoutes.getAllTags);

        console.log(data);
    }

    return (
        <div onClick={getall}>
            <div
                data-testid="login-remember-checkbox"
                className={`input_checkbox costum_input_checkbox 
                    ${rememberMe && "checked_remember"}`
                }
            />
            <label htmlFor="remember_me">remember</label>
        </div>
    );
}

