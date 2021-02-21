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

type Props = {
    person: IPerson,
    onCancelEdit: Function,
    personManager: IPersonManager,
};

export default ({person, onCancelEdit, personManager}: Props) => {

    return (
        <Container>
            <PersonEditDetailsCard personManager={personManager} person={person} onClose={onCancelEdit}/>

            <GroupTitle title='Parents'/>
            <PersonSpouse person={person} />

            <PersonAddRelative label='dad'/>

            <GroupTitle title='Kids'/>

            <Row>
                <Col className='m-0' sm={6} md={4} xl={3}>
                    <PersonRelativeCard person={person} tag='Daughter'/>
                </Col>

                <Col className='m-0' sm={6} md={4} xl={3}>
                    <PersonRelativeCard person={person} tag='Son'/>
                </Col>

                <Col className='m-0' sm={6} md={4} xl={3}>
                    <PersonRelativeCard person={person} tag='Son'/>
                </Col>

                <Col className='m-1' sm={6} md={4} xl={3}>
                    <PersonAddRelative label='Add kid'/>
                </Col>
            </Row>

        </Container>
    );
}