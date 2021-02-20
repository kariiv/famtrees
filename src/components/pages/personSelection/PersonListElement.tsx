import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import female from '../../../assets/icons/female-solid.svg';
import male from '../../../assets/icons/male-solid.svg';
import IPerson from "../../../app/interfaces/IPerson";
import Sex from "../../../app/entities/person/Sex";

type Props = {
    person: IPerson,
    onClick: Function
}

export default ({person, onClick}: Props) => {
    return (
        <Row className='my-3 mx-2 border-white border-bottom border-top hover bg-dark' onClick={() => onClick()}>
            <Container>
                <Row className='p-2'>
                    <Col className='fs-3'>
                        <img className='mr-3' src={person.getSex() === Sex.MALE ? male : female} alt='person' height={35}/><span className='text-primary'>{person.getFirstName()}</span> {person.getLastName()}
                    </Col>
                    <Col className='text-right align-self-center'>
                        <span className='go go-more-horiz hover go-2x hover-primary'/>
                    </Col>
                </Row>
            </Container>
        </Row>
    );
}