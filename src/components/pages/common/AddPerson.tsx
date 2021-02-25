import React, {Component} from 'react';
import BlackRedModal from "./BlackRedModal";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import IPerson from "../../../app/interfaces/IPerson";
import {Sex} from "../../../app/constants";
import male from '../../../assets/icons/male-solid.svg';
import female from '../../../assets/icons/female-solid.svg';
import EntitySearch from "./EntitySearch";
import IFamilyMember from "../../../app/interfaces/IFamilyMember";
import ParentContext from "../../../context/ParentContext";
import PersonContext from "../../../context/PersonContext";

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
    familyMember: IFamilyMember,
    isParent: boolean,
    doHide: Function,
    show: boolean
    sex?: Sex
}
type State = {
}


class AddPerson extends Component<Props, State> {

    constructor(props:Props) {
        super(props);

        this.state = {

        }
    }

    static contextType = ParentContext;

    handleCreateNewPerson = () => {
        console.log('Creating new');
    }

    handlePersonSelect = (selected: IPerson) => {
        const { isParent, familyMember, doHide } = this.props;
        const { addParent } = this.context;
        const person = familyMember.Person

        doHide();
        if (isParent) return addParent(selected, person);
        addParent(person, selected);
    }

    MapFunction = (person: IPerson) =>
        <PersonListElement key={person.getId()} person={person} onClick={() => this.handlePersonSelect(person)}/>

    filter = (person: IPerson, search:string): boolean =>
        (person.getFirstName() + person.getLastName()).toLowerCase().includes(search.toLowerCase())

    render() {
        const { doHide, sex, show, isParent, familyMember } = this.props;
        return (
            <PersonContext.Consumer>
                {({ people }) => {

                    if (sex !== undefined)
                        people = people.filter(p => p.getSex() === sex)

                    if (isParent)
                        people = people.filter(p => new Date(p.getBirthday()) > new Date(familyMember.Person.getBirthday()))
                    else
                        people = people.filter(p => new Date(p.getBirthday()) < new Date(familyMember.Person.getBirthday()))

                    return (
                        <BlackRedModal show={show} onClose={() => doHide(false)} onSubmit={this.handleCreateNewPerson}>
                            <EntitySearch options={people} filter={this.filter} Map={this.MapFunction}/>
                        </BlackRedModal>
                    )
                }}
            </PersonContext.Consumer>
        );
    }
}

export default AddPerson;