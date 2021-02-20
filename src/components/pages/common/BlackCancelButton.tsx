import Button from "react-bootstrap/Button";
import React from "react";

type Props = {
    onClick: Function,
    children: React.ReactNode
}

export default ({onClick, children}: Props) =>
    <Button className='rounded-0 bg-dark text-white r-bl btn-block' onClick={() => onClick()}>{children}</Button>