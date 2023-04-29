import React, { useState, useEffect } from 'react';
import { IconType } from 'react-icons';

export type ButtonProps = {
    title?: string
    Icon?: IconType
    onClick?: () => void
}
export function Button(props: ButtonProps) {

    return (
        <div>
            { props.title }
        </div>
    )
}