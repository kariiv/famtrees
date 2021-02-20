import Card from "react-bootstrap/Card";
import PersonProfile from "../common/PersonProfile";
import female from "../../../assets/icons/female-solid.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IPerson from "../../../app/interfaces/IPerson";
import { View } from '../../PersonViewController';

type DataRowProps = {
    label: string,
    value: string
}

const DataRow = ({label, value}: DataRowProps) => {
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

type Props = {
    person: IPerson,
    onEdit: Function,
    onViewChange: Function
}

export default ({person, onEdit, onViewChange}: Props) => {
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
                            <span onClick={() => onEdit()} className='go go-edit go-2x hover hover-primary ml-auto'/>
                        </Row>
                        <Row className='mt-1'>
                            <span onClick={() => onViewChange(View.PHONE)} className='go go-graph go-2x hover hover-primary ml-auto'/>
                        </Row>
                    </Col>
                </Row>

                <DataRow label='First Name:' value={person.getFirstName()}/>
                <DataRow label='Last Name:' value={person.getLastName()}/>
                <DataRow label='Birthday:' value={person.getBirthday()}/>
                <DataRow label='Death Date:' value={person.getDeathDate()}/>
                {/*<DataRow label='Sex:' value={person.getSex().ToString()}/>*/}
            </Card.Body>
        </Card>
    );
}