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

type Props = {
    tree: IFamTree,
    onBack: Function,
    parents: IParentMap
};

type State = {
    people: IPerson[],
    loading: boolean
};

class PersonController extends Component<Props, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            people: [],
            loading: true
        }
    }

    async componentDidMount() {
        this.setState({people: await List(this.props.tree!.getId()), loading: false})
    }

    handleDeletePerson = async (person: IPerson) => {
        if (await Delete(person)) {
            const people = this.state.people.filter(p => p.getId() !== person.getId())
            this.setState({people})
        }
    }
    handleCreatePerson = async (person: IPerson) => {
        const newPerson = await Create(person);
        if (newPerson) {
            const people = [...this.state.people, newPerson]
            this.setState({people})
        }
    }
    handleEditPerson = async (person: IPerson) => {
        const updatePerson = await Update(person);
        if (updatePerson) {
            let people = this.state.people.filter(p => p.getId() !== person.getId())
            people = [...people, updatePerson]
            this.setState({people})
        }
    }

    render() {
        const { people, loading } = this.state;
        const {  tree, onBack } = this.props;

        const personManager = new PersonManager(this.handleCreatePerson, this.handleDeletePerson, this.handleEditPerson)

        return (
            <PersonSelection onBack={onBack} famTree={tree} people={people} personManager={personManager} loading={loading}>
                {(person: IPerson, initView: PersonViews, onDeselect:Function) =>
                    <PersonViewSwitch initView={initView}>
                        {(view: PersonViews, handleViewChange: Function) => {
                            return (<>
                                { view === PersonViews.PHONE && <GraphPhone
                                    people={people}
                                    onViewChange={handleViewChange}
                                    person={person} />}

                                { view === PersonViews.DETAILS && <PersonDetailsController
                                    personManager={personManager}
                                    onBack={onDeselect}
                                    person={person}
                                    onViewChange={handleViewChange}/>}
                                {/*{ view === Views.DESKTOP && <GraphPhone/>}*/}
                            </>)
                        }}
                    </PersonViewSwitch>}
            </PersonSelection>
        );
    }
}

export default PersonController;