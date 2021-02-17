import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import male from '../../../assets/icons/male-solid.svg';
import female from '../../../assets/icons/female-solid.svg';

export default ({person, onClick}) => {
    return (
        <Row className='my-3 mx-2 border-white border-bottom border-top hover bg-dark' onClick={onClick}>
            <Container>
                <Row className='p-2'>
                    <Col className='fs-3'>
                        <img className='mr-3' src={female} alt='person' height={35}/><span className='text-primary'>{person.getFirstName()}</span> {person.getLastName()}
                    </Col>
                    <Col className='text-right align-self-center'>
                        <span className='go go-more-horiz hover go-2x hover-primary'/>
                    </Col>
                </Row>
            </Container>
        </Row>
    );
}