import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IPerson from "../../../app/interfaces/IPerson";

type Props = {
    onClick: Function,
    person: IPerson,
    tag: string
}

export default ({person, tag, onClick}: Props) => {
    return (
        <Card className='my-2 hover' onClick={() => onClick()}>
            {!person.isAlive() && <span className='person-dead-sm'/>}
            <Row className='m-1'>
                <Col className='text-center'>
                    <span className='fs-4 text-primary font-weight-bold '>{person.getFirstName()}<span className='text-dark'>{person.getLastName()}</span></span>
                </Col>
                <Col className='text-right align-self-center'>
                    <span className='font-weight-bold text-dark'>{tag}</span>
                </Col>
            </Row>
        </Card>
    )
}