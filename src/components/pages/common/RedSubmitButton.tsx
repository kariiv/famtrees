import Button from "react-bootstrap/Button";
import React from "react";

type Props = {
    onClick: Function,
    children: React.ReactNode,
    disabled?: boolean
}

export default ({onClick, children, disabled=false}:Props) =>
    <Button disabled={disabled} className='rounded-0 text-dark btn-block r-br' onClick={() => onClick()}>{children}</Button>