import Button from "react-bootstrap/Button";
import React from "react";

type Props = {
    onClick: Function,
    children: React.ReactNode
}

export default ({onClick, children}:Props) =>
    <Button className='rounded-0 text-dark btn-block r-br' onClick={() => onClick()}>{children}</Button>