import React, {Component} from 'react';
import TreeContext from '../context/TreeContext'
import {Create, Delete, List} from "../app/endpoints/TreeEndpoints";
import IFamTree from "../app/interfaces/IFamTree";

type State = {
    trees: IFamTree[],
    selectedTree: IFamTree | null,
    loading: boolean
}
type Props = {}

class TreeState extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            trees: [],
            selectedTree: null,
            loading: true
        }
    }

    componentDidMount() {
        this.reloadTrees();
    }

    reloadTrees = () => {
        console.log('Loading Trees')
        List().then(trees => this.setState({trees, loading: false}));
        this.setState({loading: true});
    }
    deleteTree = async (tree: IFamTree) => {
        if (await Delete(tree)) {
            const { selectedTree } = this.state

            if (selectedTree && tree.getId() === selectedTree.getId())
                this.setState({selectedTree: null})

            const trees = this.state.trees.filter(t => t.getId() !== tree.getId())
            this.setState({trees})
        }
    }
    createTree = async (tree: IFamTree) => {
        const newTree = await Create(tree);
        if (newTree) {
            const trees = [...this.state.trees, newTree]
            this.setState({trees})
        }
    }
    selectTree = async (tree: IFamTree) => {
        this.setState({selectedTree: tree})
    }
    deSelectTree = async () => {
        this.setState({selectedTree: null})
    }

    render() {
        const { trees, selectedTree, loading } = this.state;
        const { reloadTrees, selectTree, deSelectTree, createTree, deleteTree } = this;

        return (
            <TreeContext.Provider value={{
                trees,
                selectedTree,
                loading,
                reloadTrees,
                createTree,
                deleteTree,
                selectTree,
                deSelectTree
            }}>{this.props.children}</TreeContext.Provider>)
    }
}

export default TreeState;