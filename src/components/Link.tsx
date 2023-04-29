import React, { useState, useEffect } from 'react';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';

type LinkProps = NextLinkProps & {
    title?: string
    children?: React.ReactNode
}
export default function Link(props: LinkProps) {

    return (
        <NextLink {...props}>
            { props.title }
            { props.children }
        </NextLink>
    )
}