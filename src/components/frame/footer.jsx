import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default () =>
    <footer className='p-3'>
        <footer-hr/>
        <Container className='mt-3'>
            <Row>
                <Col>
                    <Row>
                        <strong>famtree Homepage</strong>
                    </Row>
                    <Row>
                        <strong><a>NetGroup</a></strong>
                    </Row>
                </Col>
                <Col/>
                <Col className='text-right'>
                    Mr.Toruabi
                    <hr className='m-0'/>
                    Since 2021
                </Col>
            </Row>
        </Container>
    </footer>