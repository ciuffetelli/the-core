import React, { useState, useEffect } from 'react';

type FormProps = {
    children: React.ReactNode | React.ReactNode[]
    className?: string
}
export function Form(props: FormProps) {

    return (
        <div className={`flex flex-wrap gap-2 ${props.className || ''}`}>
            { props.children }
        </div>
    )
}