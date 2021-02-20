import IFamTree from "../app/interfaces/IFamTree";
import IRepository from "../app/services/repository/IRepository";
import React, {Component} from "react";
import TreeSelection from "./pages/TreeSelection";
import PersonController from "./PersonController";
import IPerson from "../app/interfaces/IPerson";

type Props = {
    personRepository: IRepository,
    treeRepository: IRepository,
    trees: IFamTree[],
    people: IPerson[]
};

type State = {
    selectedTree: IFamTree | null
};

class TreeController extends Component<Props, State>{

    constructor(props: Props) {
        super(props);

        this.state = {
            selectedTree: null
        }
    }

    handleSelect = (famTree: IFamTree) => {
        this.setState({selectedTree: famTree})
    }

    removeSelection = () => {
        this.setState({selectedTree: null})
    }

    render() {
        const { selectedTree } = this.state;
        const { personRepository, treeRepository, trees, people } = this.props;

        return (
            <>
                {!selectedTree && <TreeSelection onSelect={this.handleSelect} treeRepository={treeRepository} trees={trees}/>}
                {selectedTree && <PersonController personRepository={personRepository} treeRepository={treeRepository} famTree={selectedTree} /> }
            </>
        );
    }
}
export default TreeController;