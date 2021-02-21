import Card from "react-bootstrap/Card";
import PersonProfile from "../common/PersonProfile";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IPerson from "../../../app/interfaces/IPerson";
import {PersonViews} from "../common/PersonViews";
import Sex from "../../../app/entities/person/Sex";

import male from "../../../assets/icons/male-solid.svg";
import female from "../../../assets/icons/female-solid.svg";

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
    onViewChange: Function,
    onBack: Function
}

export default ({person, onEdit, onViewChange, onBack}: Props) => {
    return (
        <Card className='profile-modal-lg'>
            <Card.Body className='font-weight-bold'>

                <PersonProfile img={person.getSex() === Sex.MALE ? male : female} lg center/>

                <Row className='mb-3'>
                    <Col className='text-dark'>
                        {!person.isAlive() && <span className='person-dead'/>}
                    </Col>
                    <Col className='text-dark mr-3'>
                        <Row>
                            <span onClick={() => onBack()} className='go go-back go-2x hover hover-primary ml-auto'/>
                        </Row>
                        <Row>
                            <span onClick={() => onEdit()} className='go go-edit go-2x hover hover-primary ml-auto'/>
                        </Row>
                        <Row className='mt-1'>
                            <span onClick={() => onViewChange(PersonViews.PHONE)} className='go go-graph go-2x hover hover-primary ml-auto'/>
                        </Row>
                    </Col>
                </Row>

                <DataRow label='First Name:' value={person.getFirstName()}/>
                <DataRow label='Last Name:' value={person.getLastName()}/>
                <DataRow label='Birthday:' value={person.getBirthday()}/>
                {!person.isAlive() && <DataRow label='Death Date:' value={person.getDeathDate()}/>}

                {/*<DataRow label='Sex:' value={person.getSex().ToString()}/>*/}
            </Card.Body>
        </Card>
    );
}