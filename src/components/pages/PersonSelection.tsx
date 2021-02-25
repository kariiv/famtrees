import React, {Component} from 'react';
import CreateNewPerson from "./personSelection/CreateNewPerson";
import PersonListElement from "./personSelection/PersonListElement";
import H1Title from "./common/H1Title";
import IPerson from "../../app/interfaces/IPerson";
import Container from "react-bootstrap/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {PersonView} from "../../app/constants";
import EntitySearch from "./common/EntitySearch";
import TreeContext from "../../context/TreeContext";
import PersonContext from "../../context/PersonContext";

type Props = {
    onSelect: Function,
}
type State = {
}

class PersonSelection extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
        }
    }

    static contextType = PersonContext;

    MapFunction = (person:IPerson) =>
        <PersonListElement key={person.getId()} onClick={(view: PersonView) => this.props.onSelect(person, view)} person={person}/>


    filter = (person: IPerson, search:string) =>
        (person.getFirstName() + person.getLastName()).toLowerCase().includes(search.toLowerCase())

    render() {
        const { loading, people, createPerson } = this.context;

        return (
            <TreeContext.Consumer>
                {({ selectedTree, deSelectTree }) => (<Container>
                    <H1Title red={selectedTree!.getName()} caps>
                        <OverlayTrigger placement='left' overlay={<Tooltip id={`tooltip-left`}>Back to menu</Tooltip>}>
                            <span className='text-left go go-back hover hover-primary' onClick={() => deSelectTree()}/>
                        </OverlayTrigger>
                    </H1Title>

                    <EntitySearch Map={this.MapFunction} filter={this.filter} options={people} loading={loading} emptyList='Looks like no people yet.'/>

                    <CreateNewPerson createPerson={createPerson} treeId={selectedTree!.getId()}/>
                </Container>) }
            </TreeContext.Consumer>
        );
    }
}

export default PersonSelection;
