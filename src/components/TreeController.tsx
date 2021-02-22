import IFamTree from "../app/interfaces/IFamTree";
import React, {Component} from "react";
import TreeSelection from "./pages/TreeSelection";
import PersonController from "./PersonController";
import { Create, Delete, List } from "../app/endpoints/TreeEndpoints";
import ParentController from "./ParentController";
import IParentMap from "../app/interfaces/IParentMap";
import IParentManager from "../app/interfaces/IParentManager";

type State = {
    trees: IFamTree[]
    loading: boolean
};

type Props = {
};

class TreeController extends Component<Props, State>{

    constructor(props: Props) {
        super(props);

        this.state = {
            trees: [],
            loading: true
        }
    }

    async componentDidMount() {
        this.setState({trees: await List(), loading: false})
    }

    handleDeleteTree = async (tree: IFamTree) => {
        if (await Delete(tree)) {
            const trees = this.state.trees.filter(t => t.getId() !== tree.getId())
            this.setState({trees})
        }
    }
    handleCreateTree = async (tree: IFamTree) => {
        const newTree = await Create(tree);

        if (newTree) {
            const trees = [...this.state.trees, newTree]
            this.setState({trees})
        }
    }

    render() {
        const { trees, loading } = this.state;

        return (
            <TreeSelection trees={trees} doNewTree={this.handleCreateTree} loading={loading}>
                {(tree: IFamTree, onDeSelect: Function) =>
                    <ParentController tree={tree}>
                        {(parents: IParentMap, parentManager: IParentManager) =>
                            <PersonController
                                parentManager={parentManager}
                                parents={parents}
                                onBack={onDeSelect}
                                tree={tree}/>
                        }
                    </ParentController>
                }
            </TreeSelection>
        );
    }
}
export default TreeController;