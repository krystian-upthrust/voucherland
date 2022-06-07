import React from "react";
import {FaLock, FaLockOpen} from "react-icons/fa";

interface LockIndicatorProps {
    status: string;
}

export function LockIndicator({status}: LockIndicatorProps): JSX.Element {

    if (status === "public") {
        return (
            <div className="voucher_lock public_lock">
                <FaLockOpen/>
            </div>
        );
    }

    if (status === "private") {
        return (
            <div className="voucher_lock private_lock">
                <FaLock/>
            </div>
        );
    }

    if (status === "expired") {
        return (
            <div className="voucher_lock expired_lock">
                <FaLock/>
            </div>
        );
    }

    return <></>
}