import React from 'react'
import Col from "react-bootstrap/Col";
import PersonProfile from "../common/PersonProfile";
import female from "../../../assets/icons/female-solid.svg";
import male from "../../../assets/icons/male-solid.svg";
import Row from "react-bootstrap/Row";
import IPerson from "../../../app/interfaces/IPerson";
import {FamilyClass, Sex} from "../../../app/constants";
import ViewContext from "../../../context/ViewContext";
import MemberClass from "../../../app/services/MemberClass";

type Props = {
    person: IPerson,
    familyClass: FamilyClass
}

export default ({person, familyClass}: Props) => {
    return (
        <ViewContext.Consumer>
            { ({ pushBreadcrumb }) => (<Col className='p-1' xs={5} md={4} lg={3} onClick={() => pushBreadcrumb(person)}>
                <div className='fs-5 card bg-secondary text-dark font-weight-bold p-2 hover hover-bg-gray-light'>
                    <PersonProfile img={person.getSex() === Sex.MALE? male: female} />
                    <Row>
                        <Col className='text-right mr-2 text-uppercase'>
                            {MemberClass(person, familyClass)}
                        </Col>
                    </Row>
                    <div className='fs-5'>
                        <Row className='text-primary justify-content-center'>
                            {person.getFirstName()}
                        </Row>
                        <Row className='justify-content-center'>
                            {person.getLastName()}
                        </Row>
                    </div>
                </div>
            </Col>) }
        </ViewContext.Consumer>)
}