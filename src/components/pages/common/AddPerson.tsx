import Search from "./RedFormControl";
import BlackRedModal from "./BlackRedModal";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import {ChangeEvent, useState} from "react";
import FlyButton from "./FlyButton";
import IPerson from "../../../app/interfaces/IPerson";
import IRepository from "../../../app/services/repository/IRepository";
import Sex from "../../../app/entities/person/Sex";
import male from '../../../assets/icons/male-solid.svg';
import female from '../../../assets/icons/female-solid.svg';

type PersonListElementProps = {
    person: IPerson,
    onClick: Function
}

const PersonListElement = ({person, onClick}: PersonListElementProps) => {
    return (
        <Row className='my-3 mx-2 border-white border-bottom border-top hover bg-dark' onClick={() => onClick()}>
            <Container>
                <Row className='p-1'>
                    <Col className='text-primary font-weight-bold'>
                        <img className='mr-3' src={person.getSex() === Sex.MALE ? male : female} alt='person' height={20}/>
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

type Props = {
    personRepository: IRepository,
    onSelect: Function,
}

export default ({onSelect, personRepository}:Props) => {
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState('');

    const handleCreateNew = () => {
        console.log('Creating new');
    }
    // const person1 = new Person(2, 'Musi', 'Mihkli');
    // const person2 = new Person(3, 'Mikle', 'Mihkli');
    // const person3 = new Person(4, 'Muumi', 'Mihk');

    const handleSearch = (e:ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <>
            <BlackRedModal show={show} onClose={handleClose} onSubmit={handleCreateNew}>
                <Search onChange={handleSearch} placeholder="Search..." value={search}/>


                {/*<PersonListElement person={person3} onClick={() => {}}/>*/}
                {/*<PersonListElement person={person2} onClick={() => {}}/>*/}
                {/*<PersonListElement person={person1} onClick={() => {}}/>*/}
            </BlackRedModal>

            <FlyButton onClick={handleOpen} icon='go-add'/>
        </>
    );
}