import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default ({famTree, onClick}) => {
    return (
        <Row className='my-3 mx-2 border-white border-bottom border-top hover bg-dark' onClick={onClick}>
            <Container>
                <Row className='p-2'>
                    <Col className='text-primary fs-3'>
                        {famTree.getName()}
                    </Col>
                    <Col className='text-right align-self-center'>
                        {famTree.getNumberOfMembers()} Members
                    </Col>
                </Row>
            </Container>
        </Row>
    );
}