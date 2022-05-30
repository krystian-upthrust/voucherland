import React from "react";

export function MobileLoginPopUp()  {

    return (
        <div className="login_popup login_popup_mobile">
            <div className="login_popup_content">
                <p>To claim these vouchers, you must be logged in.</p>
                <button className="login_btn">Login</button>
            </div>
        </div>
    )
}