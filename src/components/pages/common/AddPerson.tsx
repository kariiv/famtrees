import BlackRedModal from "./BlackRedModal";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { useState} from "react";
import FlyButton from "./FlyButton";
import IPerson from "../../../app/interfaces/IPerson";
import Sex from "../../../app/entities/person/Sex";
import male from '../../../assets/icons/male-solid.svg';
import female from '../../../assets/icons/female-solid.svg';
import EntitySearch from "./EntitySearch";

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
    onSelect: Function,
}

export default ({onSelect}:Props) => {
    const [show, setShow] = useState(false);

    const handleCreateNew = () => {
        console.log('Creating new');
    }

    const Map = (person: IPerson) =>
        <PersonListElement person={person} onClick={() => {}}/>

    const filter = (person: IPerson, search:string): boolean =>
        (person.getFirstName() + person.getLastName()).toLowerCase().includes(search.toLowerCase())

    return (
        <>
            <BlackRedModal show={show} onClose={() => setShow(false)} onSubmit={handleCreateNew}>
                <EntitySearch options={[]} filter={filter} Map={Map}/>
            </BlackRedModal>

            <FlyButton onClick={() => setShow(true)} icon='go-add'/>
        </>
    );
}