import React, { useState, useEffect } from 'react';
import { Button, ButtonProps } from '@/components/Button'

type FormButtonProps = ButtonProps & {
}
export default function FormButton(props: FormButtonProps) {

    return (
        <Button {...props} />
    )
}