import React from 'react'
import FormControl from "react-bootstrap/FormControl";

type Props = {
    onChange: Function,
    value: string,
    placeholder?: string,
    type?: string
}

export default ({onChange, value, placeholder = "Search...", type}: Props) => {
    return (
        <FormControl type={type} value={value} onChange={(e) => onChange(e)} placeholder={placeholder} className='bg-transparent fam-control border-bottom border-primary text-white'/>
    )
}