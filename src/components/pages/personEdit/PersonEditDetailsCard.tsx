import Card from "react-bootstrap/Card";
import PersonProfile from "../common/PersonProfile";
import female from "../../../assets/icons/female-solid.svg";
import male from "../../../assets/icons/male-solid.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {useState} from "react";
import IPerson from "../../../app/interfaces/IPerson";
import Sex from "../../../app/entities/person/Sex";
import FlyButton from "../common/FlyButton";
import Person from "../../../app/entities/person/Person";
import IPersonManager from "../../../app/interfaces/IPersonManager";

type DataInsertProps = {
    label: string,
    value: string,
    onChange: Function,
    placeholder?: string,
    type?:string
};

const DataInsert = ({label, value, onChange, placeholder, type}: DataInsertProps) => {
    return (
        <Form.Group as={Row} className='mb-1'>
            <Form.Label column sm="4" className='bold text-gray text-right'>
                {label}
            </Form.Label>
            <Col sm="8">
                <Form.Control className='text-dark font-weight-bold' value={value} onChange={(e) => onChange(e.target.value)} type={type} placeholder={placeholder} />
            </Col>
        </Form.Group>
    )
}

type Props = {
    person: IPerson,
    onClose: Function,
    personManager: IPersonManager,
};

export default ({person, onClose, personManager}: Props) => {

    const [firstName, setFirstName] = useState(person.getFirstName())
    const [lastName, setLastName] = useState(person.getLastName())
    const [birthday, setBirthday] = useState(person.getBirthday())
    const [deathDate, setDeathDate] = useState(!person.isAlive() ? person.getDeathDate(): '')
    const [sex, setSex] = useState(person.getSex())

    const handleFirstName = (value:any) => setFirstName(value);
    const handleLastName = (value:any) => setLastName(value);
    const handleBirthday = (value:any) => setBirthday(value);
    const handleDeathDate = (value:any) => setDeathDate(value);
    const handleSex = (value:any) => setSex(value);

    const handleSubmit = () => {
        const updated = new Person(person.getId(), firstName, lastName, 0, person.getTreeId(), birthday, deathDate);
        personManager.updatePerson(updated)
    };

    return (
        <>
            <Card className='profile-modal-lg'>
                <Card.Body className='font-weight-bold'>

                    <PersonProfile img={(sex === Sex.MALE) ? male: female} lg center/>

                    <Row className='mb-5'>
                        <Col className='text-dark'>
                            <Row>
                                <span className='go go-trash go-2x hover hover-primary ml-3' onClick={() => personManager.removePerson(person as Person)}/>
                            </Row>
                        </Col>
                        <Col className='text-dark mr-3 mb-4'>
                            <Row>
                                <span className='go go-close go-2x hover hover-primary ml-auto' onClick={() => onClose()}/>
                            </Row>
                        </Col>
                    </Row>

                    <DataInsert value={firstName} onChange={handleFirstName} label='First Name:' placeholder='First Name...'/>
                    <DataInsert value={lastName} onChange={handleLastName} label="Last Name:" placeholder='Last Name...'/>
                    <DataInsert value={birthday} onChange={handleBirthday} label='Birthday:' placeholder='Select...' type='date'/>
                    <DataInsert value={deathDate} onChange={handleDeathDate} label='Death date:' placeholder='Select...' type='date'/>
                    {/*<DataInsert value={sex} onChange={handleSex} label='Sex:' placeholder='Sex...' />*/}

                </Card.Body>
            </Card>

            <FlyButton onClick={handleSubmit} icon='go-check'/>
        </>
    );
}