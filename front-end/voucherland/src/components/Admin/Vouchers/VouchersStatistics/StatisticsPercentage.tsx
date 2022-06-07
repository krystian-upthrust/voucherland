import React, {useEffect, useState} from "react";

interface StatisticsPercentageProps {
    percentage: number;
}

export function StatisticsPercentage({ percentage }: StatisticsPercentageProps) {

    const [isNegative, setIsNegative] = useState<boolean>(false);

    useEffect(() => {
        if (percentage < 0) setIsNegative(true);
    }, [percentage]);

    return (
        <p className={`stat_percentage ${isNegative ? " stat_percent_negative" : " stat_percent_positive"}`}>
            {!isNegative && "+"} { percentage }%
        </p>
    )
}