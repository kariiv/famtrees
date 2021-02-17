import Card from "react-bootstrap/Card";
import PersonProfile from "../common/PersonProfile";
import female from "../../../assets/icons/female-solid.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DataRow = ({label, value}) => {
    return (
        <Row>
            <Col className='bold text-gray text-right'>
                {label}
            </Col>
            <Col className='text-dark'>
                {value}
            </Col>
        </Row>
    )
}

export default ({person}) => {
    return (
        <Card className='profile-modal-lg'>
            <Card.Body className='font-weight-bold'>

                <PersonProfile img={female} lg/>

                <Row className='mb-5'>
                    <Col className='text-dark'>
                        <span className='person-dead'/>
                    </Col>
                    <Col className='text-dark mr-3'>
                        <Row>
                            <span className='go go-edit go-2x hover hover-primary ml-auto'/>
                        </Row>
                        <Row className='mt-1'>
                            <span className='go go-graph go-2x hover hover-primary ml-auto'/>
                        </Row>
                    </Col>
                </Row>

                <DataRow label='First Name:' value={person.getFirstName()}/>
                <DataRow label='Last Name:' value={person.getLastName()}/>
                <DataRow label='Birthday:' value='02.05.1973'/>
                <DataRow label='Sex:' value='female'/>
            </Card.Body>
        </Card>
    );
}