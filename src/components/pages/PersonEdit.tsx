import React from 'react';
import Container from "react-bootstrap/Container";
import PersonEditDetailsCard from "./personEdit/PersonEditDetailsCard";
import PersonSpouse from "./personDetails/PersonSpouse";
import GroupTitle from "./personDetails/GroupTitle";
import PersonRelativeCard from "./personDetails/PersonRelativeCard";
import PersonAddRelative from "./personEdit/PersonAddRelative";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FamilyClass} from "../../app/constants";
import IFamilyMember from "../../app/interfaces/IFamilyMember";

type Props = {
    onCancelEdit: Function,
    familyMember: IFamilyMember,
};

export default ({onCancelEdit, familyMember}: Props) => {

    const kids = familyMember.children;
    const parents = familyMember.parents;

    return (
        <Container>
            <PersonEditDetailsCard person={familyMember.Person} onClose={onCancelEdit}/>

            <GroupTitle title='Parents'/>
            { parents.map(f => <PersonSpouse person={f.Person} />) }

            <PersonAddRelative label='dad'/>

            <GroupTitle title='Kids'/>
            <Row>
                {kids.map(f =>
                    <Col key={f.Person.getId()} className='m-0' sm={6} md={4} xl={3}>
                        <PersonRelativeCard person={f.Person} familyClass={FamilyClass.CHILD}/>
                    </Col>)}

                <Col className='m-1' sm={6} md={4} xl={3}>
                    <PersonAddRelative label='Add kid'/>
                </Col>
            </Row>
        </Container>
    );
}