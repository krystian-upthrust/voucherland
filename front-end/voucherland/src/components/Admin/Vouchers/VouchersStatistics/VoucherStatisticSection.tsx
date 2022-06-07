import React from "react";
import {StatisticsPercentage} from "./StatisticsPercentage";

interface VoucherStatisticSectionProps {
    stat_name: string;
    stat_count: string;
    percentage?: number;
}

export function VoucherStatisticSection ({ stat_name, stat_count, percentage}: VoucherStatisticSectionProps) {

    return (
        <div className="admin_statistics">
            <p className="stat_name">{ stat_name }</p>
            <p className="stat_count">{ stat_count }</p>
            {percentage && <StatisticsPercentage percentage={percentage} />}
        </div>
    )
}