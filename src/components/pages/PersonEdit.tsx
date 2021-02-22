import Container from "react-bootstrap/Container";
import PersonEditDetailsCard from "./personEdit/PersonEditDetailsCard";
import PersonSpouse from "./personDetails/PersonSpouse";
import GroupTitle from "./personDetails/GroupTitle";
import PersonRelativeCard from "./personDetails/PersonRelativeCard";
import PersonAddRelative from "./personEdit/PersonAddRelative";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IPerson from "../../app/interfaces/IPerson";
import IPersonManager from "../../app/interfaces/IPersonManager";
import IMemberMap from "../../app/interfaces/IMemberMap";
import MemberClass from "../../app/entities/famtree/MemberClass";
import Class from "../../app/entities/famtree/Class";
import IParentManager from "../../app/interfaces/IParentManager";

type Props = {
    person: IPerson,
    onCancelEdit: Function,
    personManager: IPersonManager,
    familyMembers: IMemberMap,
    parentManager: IParentManager
};

export default ({person, onCancelEdit, personManager, familyMembers}: Props) => {

    const kids = familyMembers[person.getId()].children;
    const parents = familyMembers[person.getId()].parents;

    return (
        <Container>
            <PersonEditDetailsCard personManager={personManager} person={person} onClose={onCancelEdit}/>

            <GroupTitle title='Parents'/>
            { parents.map(f => <PersonSpouse person={f.Person} />) }

            <PersonAddRelative label='dad'/>

            <GroupTitle title='Kids'/>
            <Row>
                {kids.map(f =>
                    <Col className='m-0' sm={6} md={4} xl={3}>
                        <PersonRelativeCard person={f.Person} tag={MemberClass(f.Person, Class.CHILD)}/>
                    </Col>)}

                <Col className='m-1' sm={6} md={4} xl={3}>
                    <PersonAddRelative label='Add kid'/>
                </Col>
            </Row>

        </Container>
    );
}