import Search from "./RedFormControl";
import BlackRedModal from "./BlackRedModal";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import female from "../../../assets/icons/female-solid.svg";
import Person from "../../../app/entities/person/Person";
import {useState} from "react";

const PersonListElement = ({person, onClick}) => {
    return (
        <Row className='my-3 mx-2 border-white border-bottom border-top hover bg-dark' onClick={onClick}>
            <Container>
                <Row className='p-1'>
                    <Col className='text-primary font-weight-bold'>
                        <img className='mr-3' src={female} alt='person' height={20}/>
                        {person.getLastName()}
                    </Col>
                    <Col className='text-right align-self-center'>
                        {person.getFirstName()}
                    </Col>
                </Row>
            </Container>
        </Row>
    );
}

export default ({onSelect}) => {
    const [show, setShow] = useState(true);
    const person1 = new Person(2, 'Musi', 'Mihkli');
    const person2 = new Person(3, 'Mikle', 'Mihkli');
    const person3 = new Person(4, 'Muumi', 'Mihk');
    const handleShow = () => setShow(false);
    return (
        <BlackRedModal show={show} onClose={handleShow}>
            <Search onChange={()=>{}} placeholder="Search..." value={''}/>
            <PersonListElement person={person3} onClick={() => {}}/>
            <PersonListElement person={person2} onClick={() => {}}/>
            <PersonListElement person={person1} onClick={() => {}}/>
        </BlackRedModal>
    );
}