import React, {Component} from 'react';
import PersonSelection from "./pages/PersonSelection";
import IPerson from "../app/interfaces/IPerson";
import IFamTree from "../app/interfaces/IFamTree";
import PersonViewSwitch from "./pages/common/PersonViewSwitch";
import {Create, Delete, List, Update} from "../app/endpoints/PersonEndpoints";
import { PersonViews } from "./pages/common/PersonViews";
import GraphPhone from "./pages/GraphPhone";
import PersonDetailsController from "./PersonDetailsController";
import IParentMap from "../app/interfaces/IParentMap";
import PersonManager from "../app/managers/PersonManager";
import IPersonManager from "../app/interfaces/IPersonManager";
import FamilyBuilder from "../app/services/FamilyBuilder";
import IParentManager from "../app/interfaces/IParentManager";
import IMemberMap from "../app/interfaces/IMemberMap";

type Props = {
    tree: IFamTree,
    onBack: Function,
    parents: IParentMap
    parentManager: IParentManager
};

type State = {
    people: IPerson[],
    loading: boolean,
    familyMembers: IMemberMap
};

const mapper = (people: IPerson[]): {[id:number]: IPerson} => {
    const data:{[id:number]: IPerson} = {}

    for (const person of people)
        data[person.getId()] = person;
    return data;
}

class PersonController extends Component<Props, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            people: [],
            loading: true,
            familyMembers: new FamilyBuilder(this.props.parents, mapper([])).build()
        }
    }

    async componentDidMount() {
        const people = await List(this.props.tree!.getId())
        const familyMembers = new FamilyBuilder(this.props.parents, mapper(people)).build()
        this.setState({people, loading: false, familyMembers })
    }

    handleDeletePerson = async (person: IPerson) => {
        if (await Delete(person)) {
            const people = this.state.people.filter(p => p.getId() !== person.getId())
            const familyMembers = new FamilyBuilder(this.props.parents, mapper(people)).build()
            this.setState({people, familyMembers})
        }
    }
    handleCreatePerson = async (person: IPerson) => {
        const newPerson = await Create(person);
        if (newPerson) {
            const people = [...this.state.people, newPerson]
            const familyMembers = new FamilyBuilder(this.props.parents, mapper(people)).build()
            this.setState({people, familyMembers})
        }
    }
    handleEditPerson = async (person: IPerson) => {
        const updatePerson = await Update(person);
        if (updatePerson) {
            let people = this.state.people.filter(p => p.getId() !== person.getId())
            people = [...people, updatePerson]
            const familyMembers = new FamilyBuilder(this.props.parents, mapper(people)).build()
            this.setState({people, familyMembers})
        }
    }

    render() {
        const { people, loading, familyMembers } = this.state;
        const {  tree, onBack, parentManager } = this.props;

        const personManager = new PersonManager(this.handleCreatePerson, this.handleDeletePerson, this.handleEditPerson)

        return (
            <PersonSelection onBack={onBack} famTree={tree} people={people} personManager={personManager} loading={loading}>
                {(person: IPerson, initView: PersonViews, onDeselect:Function, modifiedManager: IPersonManager) =>
                    <PersonViewSwitch initView={initView}>
                        {(view: PersonViews, handleViewChange: Function) => {
                            return (<>
                                { view === PersonViews.PHONE && <GraphPhone
                                    personManager={modifiedManager}
                                    parentManager={parentManager}
                                    familyMembers={familyMembers}
                                    onViewChange={handleViewChange}
                                    person={person} />}
                                { view === PersonViews.DETAILS && <PersonDetailsController
                                    parentManager={parentManager}
                                    familyMembers={familyMembers}
                                    personManager={modifiedManager}
                                    onBack={onDeselect}
                                    person={person}
                                    onViewChange={handleViewChange}/>}
                                {/*{ view === Views.DESKTOP && <GraphPhone/>}*/}
                            </>)
                        }}
                    </PersonViewSwitch>
                }
            </PersonSelection>
        );
    }
}

export default PersonController;