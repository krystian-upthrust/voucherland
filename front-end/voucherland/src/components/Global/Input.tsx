import React, {ChangeEvent} from "react";

// TODO
// classname for styling
// error possiblity that changes styles
// focus style

interface InputProps {
    type: string;
    placeholder: string;
    test_id: string;
    cy_id?: string;
    error: boolean
    value?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function Input ({ type, placeholder, value, test_id, cy_id, onChange, error=false }: InputProps) {

    return (
        <input
            type={type}
            placeholder={placeholder}
            data-testid={test_id}
            data-cy={cy_id}
            onChange={onChange}
            value={value}
            className={`global_input_style ${error && 'input_error'}`}
        />
    );
}
