import React, {Component} from "react";
import {Create, Delete, List, Update} from "../app/endpoints/PersonEndpoints";
import PersonContext from "./PersonContext";
import IPerson from "../app/interfaces/IPerson";
import TreeContext from "./TreeContext";
import FamilyBuilder from "../app/services/FamilyBuilderVol2";
import ParentContext from "./ParentContext";

type Props = {
};

type State = {
    people: IPerson[],
    loading: boolean,
};

class PersonState extends Component<Props, State>{

    constructor(props: any) {
        super(props);

        this.state = {
            people: [],
            loading: true
        }
    }
    static contextType = TreeContext;

    componentDidMount() {
        this.reloadPeople();
    }

    reloadPeople = async () => {
        console.log('Loading person')
        this.setState({people: await List(this.context.selectedTree!.getId()), loading: false })
    }
    deletePerson = async (person: IPerson) => {
        if (await Delete(person)) {
            const people = this.state.people.filter(p => p.getId() !== person.getId())
            this.setState({people})
        }
    }
    createPerson = async (person: IPerson) => {
        const newPerson = await Create(person);
        if (newPerson) {
            const people = [...this.state.people, newPerson]
            this.setState({people})
        }
    }
    editPerson = async (person: IPerson) => {
        const updatePerson = await Update(person);
        if (updatePerson) {
            let people = this.state.people.filter(p => p.getId() !== person.getId())
            people = [...people, updatePerson]
            this.setState({people})
        }
    }

    render() {
        const { people, loading } = this.state;
        const { createPerson, editPerson, deletePerson, reloadPeople } = this;

        return (<ParentContext.Consumer>
                { ({ parents }) => (
                    <PersonContext.Provider value={{
                        people,
                        familyMembers: new FamilyBuilder(parents ,people).build(),
                        loading,

                        reloadPeople,
                        createPerson,
                        editPerson,
                        deletePerson,
                    }}>{this.props.children}</PersonContext.Provider>
                ) }
            </ParentContext.Consumer>);
    }
}
export default PersonState;