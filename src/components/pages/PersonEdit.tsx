import Container from "react-bootstrap/Container";
import PersonEditDetailsCard from "./personEdit/PersonEditDetailsCard";
import PersonSpouse from "./personDetails/PersonSpouse";
import GroupTitle from "./personDetails/GroupTitle";
import PersonRelativeCard from "./personDetails/PersonRelativeCard";
import PersonAddRelative from "./personEdit/PersonAddRelative";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IPerson from "../../app/interfaces/IPerson";
import IRepository from "../../app/services/repository/IRepository";

type Props = {
    person: IPerson,
    onCancelEdit: Function,
    personRepository: IRepository,
};

export default ({person, onCancelEdit, personRepository}: Props) => {

    return (
        <Container>
            <PersonEditDetailsCard person={person} onClose={onCancelEdit}/>

            {/*<GroupTitle title='Parents'/>*/}
            {/*<PersonSpouse first='Merike' last='Muusik' />*/}

            {/*<PersonAddRelative label='dad'/>*/}

            {/*<GroupTitle title='Kids'/>*/}

            {/*<Row>*/}
            {/*    <Col className='m-0' sm={6} md={4} xl={3}>*/}
            {/*        <PersonRelativeCard first='Mari' last='Milling' tag='Daughter'/>*/}
            {/*    </Col>*/}

            {/*    <Col className='m-0' sm={6} md={4} xl={3}>*/}
            {/*        <PersonRelativeCard first='Matu' last='Milling' tag='Son'/>*/}
            {/*    </Col>*/}

            {/*    <Col className='m-0' sm={6} md={4} xl={3}>*/}
            {/*        <PersonRelativeCard first='Matu' last='Milling' tag='Son'/>*/}
            {/*    </Col>*/}

            {/*    <Col className='m-1' sm={6} md={4} xl={3}>*/}
            {/*        <PersonAddRelative label='Add kid'/>*/}
            {/*    </Col>*/}
            {/*</Row>*/}

        </Container>
    );
}