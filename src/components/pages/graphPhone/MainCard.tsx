import React from 'react'
import PersonProfile from "../common/PersonProfile";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import female from "../../../assets/icons/female-solid.svg";
import male from "../../../assets/icons/male-solid.svg";
import IFamilyMember from "../../../app/interfaces/IFamilyMember";
import {Sex, PersonView} from "../../../app/constants";
import ViewContext from "../../../context/ViewContext";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

type Props = {
    familyMember: IFamilyMember
}

export default ({familyMember}: Props) => {
    const person = familyMember.Person

    let piblings: IFamilyMember[] = []

    for (const parent of familyMember.parents)
        piblings = [...piblings, ...parent.siblings]

    return (
        <ViewContext.Consumer>
            { ({changeView, pushBreadcrumb}) => (
                <div className='bg-light mx-1 text-dark font-weight-bold card card-body mt-5' onDoubleClick={() => pushBreadcrumb(person)}>
                    <div className=''>
                        <PersonProfile img={person.getSex() === Sex.MALE ? male : female} center md/>
                        <Row>
                            <Col>
                                {!person.isAlive() && <span className='person-dead'/>}
                            </Col>
                            <Col className='text-right'>
                                <span onClick={() => changeView(PersonView.DETAILS)} className='go go-more-vert hover hover-primary go-2x'/>
                            </Col>
                        </Row>

                        <Col className='lh-1 mb-2 user-select-none'>
                            <Row className='justify-content-center text-primary'>
                                {person.getFirstName()}
                            </Row>
                            <Row className='justify-content-center fs-5 mb-1'>
                                {person.getLastName()}
                            </Row>
                            <Row className='justify-content-center  fs-8 lh-0'>
                                {person.getBirthday()}
                            </Row>
                            <Row className='justify-content-center fs-8 lh-0'>
                                {person.getDeathDate()}
                            </Row>
                        </Col>

                        <Row>
                            <Col>
                                <Row className='justify-content-center user-select-none'>
                                    Kids
                                </Row>
                                <Row className='justify-content-center user-select-none'>
                                    {familyMember.children.length}
                                </Row>
                            </Col>

                            <Col className='text-center'>
                                <Row className='justify-content-center user-select-none'>
                                    Siblings
                                    <OverlayTrigger placement='top' overlay={<Tooltip id={person.getId().toString()}>Brothers and sisters.</Tooltip>}>
                                        <span className='go go-info text-primary hover icon-center'/>
                                    </OverlayTrigger>
                                </Row>
                                <Row className='justify-content-center user-select-none'>
                                    {familyMember.siblings.length}
                                </Row>
                            </Col>

                            <Col className='text-center'>
                                <Row className='justify-content-center user-select-none'>
                                    Piblings
                                    <OverlayTrigger placement='top' overlay={<Tooltip id={person.getId().toString()}>Uncles and aunts.</Tooltip>}>
                                        <span className='go go-info text-primary hover icon-center'/>
                                    </OverlayTrigger>
                                </Row>
                                <Row className='justify-content-center user-select-none'>
                                    {piblings.length}
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>)}
        </ViewContext.Consumer>


    );
}