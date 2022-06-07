import React from "react";
import {VoucherStatisticSection} from "./VoucherStatisticSection";

export function AdminVouchersStatistics() {

    return (
        <div className="admin_statistics_content">
            <VoucherStatisticSection
                stat_name={"#publicVouchersThisWeek"}
                stat_count={"123"}
                percentage={-20}
            />

            <VoucherStatisticSection
                stat_name={"#downloads24h"}
                stat_count={"21 123"}
                percentage={20}
            />

            <VoucherStatisticSection
                stat_name={"#totalDownloads"}
                stat_count={"123 123"}
            />
        </div>
    )
}