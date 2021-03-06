import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

type Props = {
    onClick?: Function,
    label: string
}

export default ({label, onClick = ()=>{}}: Props) => {
    return (
        <Card className='bg-secondary p-2 hover hover-bg-gray' onClick={() => onClick()}>
            <Row className='fs-4 align-self-center'>
                <span className='font-weight-bold text-uppercase text-primary text-center'>{label}</span>
                <span className='ml-2 go go-person-add text-dark fs-1'/>
            </Row>
        </Card>
    );
}