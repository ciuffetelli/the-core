import React, { useState, useEffect } from 'react';
import { Form } from '@/components/Form'
import { Input } from '@/components/Form/Input'
import FormButton from '@/components/Form/FormButton';
import Link from '@/components/Link';

type FormLoginProps = {
}
export default function FormLogin(props: FormLoginProps) {

    return (
        <div>
            <h1 className='text-center text-3xl'>
                TheCore
            </h1>
            <div className='flex flex-col gap-4'>
                <p>Sign in to start your session</p>

                <Form>
                    <Input />
                    <Input />
                    <FormButton />
                </Form>
                <Link href='/register' title='Register a new membership' />
            </div>
        </div>
    )
}