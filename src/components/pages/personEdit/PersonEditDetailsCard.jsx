import Card from "react-bootstrap/Card";
import PersonProfile from "../common/PersonProfile";
import female from "../../../assets/icons/female-solid.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {useState} from "react";

const DataInsert = ({label, value, onChange, placeholder, type=null}) => {
    return (
        <Form.Group as={Row} className='mb-1'>
            <Form.Label column sm="4" className='bold text-gray text-right'>
                {label}
            </Form.Label>
            <Col sm="8">
                <Form.Control className='text-dark font-weight-bold' value={value} onChange={onChange} type={type} placeholder={placeholder} />
            </Col>
        </Form.Group>
    )
}

export default ({person, onClose}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [deathday, setDeathday] = useState('')
    const [sex, setSex] = useState('')

    const handleFirstName = (e) => setFirstName(e.target.value);
    const handleLastName = (e) => setLastName(e.target.value);
    const handleBirthday = (e) => setBirthday(e.target.value);
    const handleDeathday = (e) => setDeathday(e.target.value);
    const handleSex = (e) => setSex(e.target.value);

    return (
        <Card className='profile-modal-lg'>
            <Card.Body className='font-weight-bold'>

                <PersonProfile img={female} />

                <Row className='mb-5'>
                    <Col className='text-dark'>
                        <span className='person-dead'/>
                    </Col>
                    <Col className='text-dark mr-3 mb-4'>
                        <Row>
                            <span className='go go-close go-2x hover hover-primary ml-auto' onClick={onClose}/>
                        </Row>
                    </Col>
                </Row>

                <DataInsert value={firstName} onChange={handleFirstName} label='First Name:' placeholder='First Name...'/>
                <DataInsert value={lastName} onChange={handleLastName} label="Last Name:" placeholder='Last Name...'/>
                <DataInsert value={birthday} onChange={handleBirthday} label='Birthday:' placeholder='Select...' type='date'/>
                <DataInsert value={deathday} onChange={handleDeathday} label='Deathday:' placeholder='Select...' type='date'/>
                <DataInsert value={sex} onChange={handleSex} label='Sex:' placeholder='Sex...' />

            </Card.Body>
        </Card>
    );
}