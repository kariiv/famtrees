import React from 'react'
import PersonProfile from "../common/PersonProfile";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import female from "../../../assets/icons/female-solid.svg";
import male from "../../../assets/icons/male-solid.svg";
import IFamilyMember from "../../../app/interfaces/IFamilyMember";
import {FamilyClass, PersonView, Sex} from "../../../app/constants";
import ViewContext from "../../../context/ViewContext";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import MemberClass from "../../../app/services/MemberClass";
import GetParents from "../../../app/services/GetParents";

type Props = {
    familyMember: IFamilyMember
    compareFM?: IFamilyMember
}

export default ({familyMember, compareFM}: Props) => {
    const person = familyMember.Person
    let isStepSibling = false;

    let piblings: IFamilyMember[] = []

    for (const parent of familyMember.parents)
        piblings = [...piblings, ...parent.siblings]

    if (compareFM && compareFM.parents.length === 2 && familyMember.parents.length === 2) {
        const parents1 = GetParents(familyMember);
        const parents2 = GetParents(compareFM);

        if (parents1.mom !== parents2.mom || parents1.dad !== parents2.dad)
            isStepSibling = true;
    }

    return (
        <ViewContext.Consumer>
            { ({changeView, pushBreadcrumb}) => (
                <div className='bg-light mx-1 text-dark font-weight-bold card card-body mt-45' onDoubleClick={() => pushBreadcrumb(person)}>
                    <div className=''>
                        <PersonProfile img={person.getSex() === Sex.MALE ? male : female} center md/>
                        <Row>
                            <Col>
                                {!person.isAlive() && <span className='person-dead'/>}
                                {isStepSibling && MemberClass(familyMember.Person, FamilyClass.STEPSIBLING) }
                            </Col>
                            <Col className='text-right'>
                                <span onClick={() => changeView(PersonView.DETAILS)} className='go go-more-vert hover hover-primary go-2x'/>
                            </Col>
                        </Row>

                        <Col className='lh-2 mb-2 user-select-none'>
                            <Row className='justify-content-center text-primary fs-5'>
                                {person.getFirstName()}
                            </Row>
                            <Row className='justify-content-center fs-4 mb-1'>
                                {person.getLastName()}
                            </Row>
                            <Row className='justify-content-center  fs-8 lh-0'>
                                {person.getBirthday()}
                            </Row>
                            <Row className='justify-content-center fs-8 lh-0'>
                                {!person.isAlive() && person.getDeathDate()}
                            </Row>
                        </Col>

                        <Row>
                            <Col>
                                <Row className='justify-content-center user-select-none'>
                                    Children
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