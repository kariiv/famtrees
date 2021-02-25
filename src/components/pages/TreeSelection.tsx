import React, {Component} from 'react';
import TreeListElement from "./treeSelection/TreeListElement";
import CreateNewTree from "./treeSelection/CreateNewTree";
import H1Title from "./common/H1Title";
import FlyButton from "./common/FlyButton";
import IFamTree from "../../app/interfaces/IFamTree";
import Container from "react-bootstrap/Container";
import EntitySearch from "./common/EntitySearch";

import TreeContext from "../../context/TreeContext";

type State = {
    show: boolean,
}
type Props = {
    children: React.ReactNode,
}

class TreeSelection extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            show: false
        }
    }
    static contextType = TreeContext;

    handleCreateDialogShow = () => this.setState({show: true})
    handleCreateDialogHide = () => this.setState({show: false})

    MapFunction = (famTree: IFamTree) => {
        const { selectTree } = this.context;
        return <TreeListElement key={famTree.getId()} onClick={() => selectTree(famTree)} famTree={famTree}/>
    }

    handleNewTree = (tree: IFamTree) => {
        this.handleCreateDialogHide();
        this.context.createTree(tree);
    }

    filter = (famTree: IFamTree, search:string): boolean =>
        famTree.getName().toLowerCase().includes(search.toLowerCase())


    render() {
        const { children } = this.props;
        const { show } = this.state;
        const { trees, selectedTree, loading } = this.context;

        if (selectedTree)
            return children;

        return (<Container>
                <H1Title red="Family" white=' trees' caps/>

                <EntitySearch Map={this.MapFunction} filter={this.filter} options={trees} loading={loading}
                              emptyList='Looks like no trees yet.'/>

                <CreateNewTree show={show} onCreate={this.handleNewTree} onCancel={this.handleCreateDialogHide}/>
                <FlyButton onClick={this.handleCreateDialogShow} icon='go-add'/>
            </Container>);
    }
}
export default TreeSelection;