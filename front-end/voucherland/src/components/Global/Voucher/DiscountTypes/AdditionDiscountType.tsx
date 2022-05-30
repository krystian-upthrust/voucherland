import React from "react";

interface AdditionDiscountTypeProps {
    discount: string;
}

export function AdditionDiscountType({discount}: AdditionDiscountTypeProps) {

    return (
        <div className="addition_discount">
            <p>{discount} gratis</p>
        </div>
    )

}