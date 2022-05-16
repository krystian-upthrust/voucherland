import React, {MouseEvent, useEffect, useState} from "react";
import { LocalStorageService } from "../../utils/LocalStorageService";

interface CheckBoxProps {
    remember : boolean
    onClick: (event : MouseEvent<HTMLDivElement>) => void;
}

export function CheckBox ({ remember, onClick }:CheckBoxProps) {

    const [rememberMe, setRememberMe] = useState<boolean>(false);

    useEffect(() => {
        LocalStorageService.checkRememberMe();
        setRememberMe(LocalStorageService.getRememberMe());
    }, [remember]);

    return (
        <div onClick={onClick}>
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

