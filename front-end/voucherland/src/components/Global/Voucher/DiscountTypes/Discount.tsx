import React from "react";
import {PercentageDiscountType} from "./PercentageDiscountType";
import {AdditionDiscountType} from "./AdditionDiscountType";

interface DiscountProps {
    discount_type: string;
    discount: string;
}

export function Discount({discount_type, discount}: DiscountProps) : JSX.Element {

    if (discount_type === "percentage") {
        return <PercentageDiscountType discount={discount}/>
    }

    if (discount_type === "addition") {
        return <AdditionDiscountType discount={discount}/>
    }

    return <></>;
}