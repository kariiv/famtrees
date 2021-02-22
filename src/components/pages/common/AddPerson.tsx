import BlackRedModal from "./BlackRedModal";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import IPerson from "../../../app/interfaces/IPerson";
import Sex from "../../../app/entities/person/Sex";
import male from '../../../assets/icons/male-solid.svg';
import female from '../../../assets/icons/female-solid.svg';
import EntitySearch from "./EntitySearch";
import IPersonManager from "../../../app/interfaces/IPersonManager";
import IParentManager from "../../../app/interfaces/IParentManager";
import IMemberMap from "../../../app/interfaces/IMemberMap";

type PersonListElementProps = {
    person: IPerson,
    onClick: Function
}

const PersonListElement = ({person, onClick}: PersonListElementProps) => {
    return (
        <Row className='my-3 mx-2 border-white border-bottom border-top hover bg-dark' onClick={() => onClick()}>
            <Container>
                <Row className='p-1'>
                    <Col className='text-primary font-weight-bold' xs={7}>
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
    familyMembers: IMemberMap,
    personManager: IPersonManager,
    parentManager: IParentManager,
    person: IPerson,
    isParent: boolean,
    doHide: Function,
    show: boolean
    sex?: Sex
}

export default ({personManager, parentManager, person, isParent, familyMembers, sex, doHide, show}:Props) => {

    let options = Object.values(familyMembers).map(f => f.Person)


    if (sex !== undefined)
        options = options.filter(p => p.getSex() === sex)

    if (isParent)
        options = options.filter(p => new Date(p.getBirthday()) > new Date(person.getBirthday()))
    else
        options = options.filter(p => new Date(p.getBirthday()) < new Date(person.getBirthday()))


    const handleSelect = (selected: IPerson) =>{
        if (isParent) return parentManager.addParent(selected, person);
        parentManager.addParent(person, selected);
        doHide(false);
    }

    const handleCreateNew = () => {

        console.log('Creating new');
    }

    const Map = (person: IPerson) =>
        <PersonListElement key={person.getId()} person={person} onClick={() => handleSelect(person)}/>

    const filter = (person: IPerson, search:string): boolean =>
        (person.getFirstName() + person.getLastName()).toLowerCase().includes(search.toLowerCase())

    return (
        <BlackRedModal show={show} onClose={() => doHide(false)} onSubmit={handleCreateNew}>
            <EntitySearch options={options} filter={filter} Map={Map}/>
        </BlackRedModal>
    );
}