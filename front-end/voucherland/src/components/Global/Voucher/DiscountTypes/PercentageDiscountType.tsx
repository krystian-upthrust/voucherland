import React from "react";

interface PercentageDiscountTypeProps {
    discount: string;
}

export function PercentageDiscountType({ discount }: PercentageDiscountTypeProps) {

    return (
        <div className="percentage_discount">
            <p>{discount}</p>
        </div>
    )
}