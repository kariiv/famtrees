import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import PersonProfile from "../common/PersonProfile";
import female from "../../../assets/icons/female-solid.svg";
import male from "../../../assets/icons/male-solid.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import IPerson from "../../../app/interfaces/IPerson";
import {Sex} from "../../../app/constants";
import FlyButton from "../common/FlyButton";
import Person from "../../../app/entities/person/Person";
import PersonContext from "../../../context/PersonContext";

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
};
type State = {
    firstName: string,
    lastName: string,
    birthday: string,
    deathDate: string
};


class PersonEditDetailsCard extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        const { person } = props;

        this.state = {
            firstName: person.getFirstName(),
            lastName: person.getLastName(),
            birthday: person.getBirthday(),
            deathDate: !person.isAlive() ? person.getDeathDate(): '',
        }
    }
    static contextType = PersonContext;

    handleSubmit = () => {
        const { person } = this.props;
        const { editPerson } = this.context;
        const { firstName, lastName, birthday, deathDate } = this.state;

        const updated = new Person(person.getId(), firstName, lastName, person.getSex(), person.getTreeId(), birthday, deathDate);
        editPerson(updated)
    };

    handleFirstName = (value:any) => this.setState({ firstName: value});
    handleLastName = (value:any) => this.setState({ lastName: value});
    handleBirthday = (value:any) => this.setState({ birthday: value});
    handleDeathDate = (value:any) => this.setState({ deathDate: value});

    render() {
        const { firstName, lastName, birthday, deathDate } = this.state;
        const { onClose, person } = this.props;
        const { deletePerson } = this.context;

        return (
            <>
                <Card className='profile-modal-lg'>
                    <Card.Body className='font-weight-bold'>

                        <PersonProfile img={(person.getSex() === Sex.MALE) ? male: female} lg center/>

                        <Row className='mb-5'>
                            <Col className='text-dark'>
                                <Row>
                                    <span className='go go-trash go-2x hover hover-primary ml-3' onClick={() => deletePerson(person)}/>
                                </Row>
                            </Col>
                            <Col className='text-dark mr-3 mb-4'>
                                <Row>
                                    <span className='go go-close go-2x hover hover-primary ml-auto' onClick={() => onClose()}/>
                                </Row>
                            </Col>
                        </Row>

                        <DataInsert value={firstName} onChange={this.handleFirstName} label='First Name:' placeholder='First Name...'/>
                        <DataInsert value={lastName} onChange={this.handleLastName} label="Last Name:" placeholder='Last Name...'/>
                        <DataInsert value={birthday} onChange={this.handleBirthday} label='Birthday:' placeholder='Select...' type='date'/>
                        <DataInsert value={deathDate} onChange={this.handleDeathDate} label='Death date:' placeholder='Select...' type='date'/>

                    </Card.Body>
                </Card>

                <FlyButton onClick={this.handleSubmit} icon='go-check'/>
            </>
        );
    }
}

export default PersonEditDetailsCard;
