import React from 'react';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IPerson from "../../../app/interfaces/IPerson";
import {FamilyClass} from "../../../app/constants";
import MemberClass from "../../../app/services/MemberClass";
import ViewContext from "../../../context/ViewContext";

type Props = {
    person: IPerson,
    familyClass: FamilyClass
}

export default ({person, familyClass}: Props) => {
    return (
        <ViewContext.Consumer>
            {({pushBreadcrumb}) => (<Card className='my-2 hover' onClick={() => pushBreadcrumb(person)}>
                {!person.isAlive() && <span className='person-dead-sm'/>}
                <Row className='m-1'>
                    <Col className='text-center'>
                        <span className='fs-4 text-primary font-weight-bold '>{person.getFirstName()}<span className='text-dark'>{person.getLastName()}</span></span>
                    </Col>
                    <Col className='text-right align-self-center'>
                        <span className='font-weight-bold text-dark'>{MemberClass(person, familyClass)}</span>
                    </Col>
                </Row>
            </Card>)}
        </ViewContext.Consumer>

    )
}