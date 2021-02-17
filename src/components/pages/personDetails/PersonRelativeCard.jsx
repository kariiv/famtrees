import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default ({first, last, tag, dead, onClick}) => {
    return (
        <Card className='my-2 hover' onClick={onClick}>
            {dead && <span className='person-dead-sm'/>}
            <Row className='m-1'>
                <Col className='text-center'>
                    <span className='fs-4 text-primary font-weight-bold '>{first}<span className='text-dark'>{last}</span></span>
                </Col>
                <Col className='text-right align-self-center'>
                    <span className='font-weight-bold text-dark'>{tag}</span>
                </Col>
            </Row>
        </Card>
    )
}