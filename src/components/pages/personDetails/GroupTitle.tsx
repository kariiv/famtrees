import React from 'react'
type Props = {
    title: string,
    caps?: boolean
}

export default ({title, caps = true}: Props) => {
    return (
        <h3 className={'text-center mt-3 font-weight-bold' + (caps? ' text-uppercase': '')}><span className='text-primary'>{title}</span></h3>
    )
}