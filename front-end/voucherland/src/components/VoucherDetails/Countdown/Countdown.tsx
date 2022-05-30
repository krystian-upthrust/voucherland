import React, { useState } from "react";
import CountdownElement from "./CountdownElement";

interface CountdownProps {
    expiry: string;
}

export default function Countdown({expiry} : CountdownProps) {
    const [days, setDays] = useState<string>("0");
    const [hours, setHours] = useState<string>("0");
    const [minutes, setMinutes] = useState<string>("0");
    const [seconds, setSeconds] = useState<string>("0");

    const timeInterval : NodeJS.Timer = setInterval(function () {
        if (!expiry) return;

        // Expiry date of the voucher
        let expiryDate = new Date(expiry + " 20:00:00").getTime();

        // calculates the difference between the expiry date and the present date
        let countInterval = expiryDate - new Date().getTime();

        // Time calculations for days, hours, minutes and seconds
        let DD = Math.floor(countInterval / (1000 * 60 * 60 * 24));
        let HH = Math.floor((countInterval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let MM = Math.floor((countInterval % (1000 * 60 * 60)) / (1000 * 60));
        let SS = Math.floor((countInterval % (1000 * 60)) / 1000);

        // Adds a zero in front of the number, if number is a single digit
        function AddZeroInFront(value: number) {
            if (value >= 0 && value <=9) {
                return String("0" + value);
            }
            return String(value);
        }

        // Output result in states
        setDays(AddZeroInFront(DD));
        setHours(AddZeroInFront(HH));
        setMinutes(AddZeroInFront(MM));
        setSeconds(AddZeroInFront(SS));

        // when count is over
        if (countInterval <= 0) {
            clearInterval(timeInterval);
            setDays("00");
            setHours("00");
            setMinutes("00");
            setSeconds("00");
        }
    }, 1000);

    return (
    <div className="countdown">
      <CountdownElement count_number={days} count_name={"days"} />
      <CountdownElement count_number={hours} count_name={"hours"} />
      <CountdownElement count_number={minutes} count_name={"min"} />
      <CountdownElement count_number={seconds} count_name={"sec"} />
    </div>
  );
}
