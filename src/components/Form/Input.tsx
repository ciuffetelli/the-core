import React, { useState, useEffect } from 'react';

type InputProps = {
    name?: string
    value?: string  
    label?: string
    type?: string
    autoComplete?: string
    className?: string
}
export function Input(props: InputProps) {

    return (
        <div>
            <input 
                name={props.name}
                value={props.value}
                placeholder={props.label}
                type={props.type || 'text'}
                autoComplete={props.autoComplete || 'off'}

                className={`border border-gray-300 rounded w-md p-2 ${props.className || ''}`}
            />
        </div>
    )
}