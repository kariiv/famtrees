import {useState} from "react";
import CreateNewPerson from "./personSelection/CreateNewPerson";
import PersonListElement from "./personSelection/PersonListElement";
import H1Title from "./common/H1Title";
import IFamTree from "../../app/interfaces/IFamTree";
import IPerson from "../../app/interfaces/IPerson";
import Container from "react-bootstrap/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {PersonViews} from "./common/PersonViews";
import EntitySearch from "./common/EntitySearch";
import IPersonManager from "../../app/interfaces/IPersonManager";
import PersonManager from "../../app/managers/PersonManager";

type Props = {
    famTree: IFamTree,
    people: IPerson[],
    onBack: Function,
    personManager: IPersonManager,
    loading: boolean,
    children: Function,
}

export default ({onBack, famTree, personManager, people, loading, children}:Props) => {
    const [selected, setSelected] = useState<IPerson|null>(null);
    const [view, setView] = useState<PersonViews|null>(null);

    const newUpdate = (person: IPerson) => {
        personManager.updatePerson(person);
        if (selected && person.getId() === selected.getId())
            setSelected(person);
    }
    const newDelete = (person: IPerson) => {
        personManager.removePerson(person);
        if (selected && person.getId() === selected.getId())
            setSelected(null);
    }
    const modifiedManager = new PersonManager(personManager.addPerson, newDelete, newUpdate);


    const Map = (person:IPerson) =>
        <PersonListElement key={person.getId()} onClick={(view: PersonViews) => { setSelected(person); setView(view) }} person={person}/>

    const filter = (person: IPerson, search:string): boolean =>
        (person.getFirstName() + person.getLastName()).toLowerCase().includes(search.toLowerCase())

    return (
        <>
            {!selected && <Container>
                <H1Title red={famTree.getName()} caps>
                    <OverlayTrigger placement='left' overlay={<Tooltip id={`tooltip-left`}>Back to menu</Tooltip>}>
                        <span className='text-left go go-back hover hover-primary' onClick={() => onBack()}/>
                    </OverlayTrigger>
                </H1Title>

                <EntitySearch Map={Map} filter={filter} options={people} loading={loading} emptyList='Looks like no people yet.'/>

                <CreateNewPerson personManager={personManager} treeId={famTree.getId()}/>
            </Container>}

            {selected && children(selected, view, () => setSelected(null), modifiedManager)}
        </>
    );
}