import React from "react";
import {LocalStorageService} from "../../utils/LocalStorageService";
import {ECookiesOptions} from "../../utils/types";

interface CookiesProps {
    setCookie: (cookie: boolean) => void;
}

export default function Cookies({ setCookie } : CookiesProps) {

    const handleOkClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        LocalStorageService.setCookiesSaved(ECookiesOptions.AGREE);
        setCookie(LocalStorageService.getCookiesSaved());
    }

    return (
        <section className="cookies">
            <div className="cookies_header">
                <div className="cookies_header_title">
                    <h3>Cookies</h3>
                </div>
                <div className="cookies_header_image">
                    <img
                        src="/resources/images/cookie-image.png"
                        alt="Transparent Background Cookie"
                    />
                </div>
            </div>
            <div className="cookies_text">
                <p>
                    It is a long established fact that a reader will be distracted by the
                    readable content of the page.
                </p>
            </div>
            <div className="cookies_buttons">
                <button className="cookies_buttons_ok" onClick={handleOkClick}>Ok</button>
                <button className="cookies_buttons_policy">Private Policy</button>
            </div>
        </section>
    );
}
