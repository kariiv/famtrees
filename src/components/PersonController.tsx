import React, {Component} from 'react';
import PersonSelection from "./pages/PersonSelection";
import IRepository from "../app/services/repository/IRepository";
import IPerson from "../app/interfaces/IPerson";
import IFamTree from "../app/interfaces/IFamTree";
import PersonViewController from "./PersonViewController";

type Props = {
    personRepository: IRepository,
    treeRepository: IRepository,
    famTree: IFamTree
};

type State = {
    selectedPerson: IPerson|null
};

class PersonController extends Component<Props, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            selectedPerson: null
        }
    }

    handleSelect = (person: IPerson) => {
        this.setState({selectedPerson: person})
    }

    removeSelection = () => {
        this.setState({selectedPerson: null})
    }

    render() {
        const {selectedPerson} = this.state;
        const { personRepository, famTree } = this.props;

        return (
            <>
                {!selectedPerson && <PersonSelection onSelect={this.handleSelect} famTree={famTree}/>}

                {selectedPerson && <PersonViewController personRepository={personRepository} person={selectedPerson}/>}
            </>
        );
    }
}

export default PersonController;