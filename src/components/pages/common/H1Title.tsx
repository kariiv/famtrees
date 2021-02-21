import React from "react";

type Props = {
    caps?: boolean,
    red?: string,
    white?: string,
    children?: React.ReactNode,
}

export default ({caps=false, red='', white='', children}: Props) => {
    return <h1 className={'text-center my-4' + (caps? ' text-uppercase': '')}>{children}<span className='text-primary'>{red}</span>{white}</h1>
}