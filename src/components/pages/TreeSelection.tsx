import TreeListElement from "./treeSelection/TreeListElement";
import CreateNewTree from "./treeSelection/CreateNewTree";
import {useState} from "react";
import H1Title from "./common/H1Title";
import FlyButton from "./common/FlyButton";
import IFamTree from "../../app/interfaces/IFamTree";
import Container from "react-bootstrap/Container";
import EntitySearch from "./common/EntitySearch";

type Props = {
    trees: IFamTree[],
    doNewTree: Function,
    children: Function,
    loading: boolean
}

export default ({trees, doNewTree, children, loading}: Props) => {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState<IFamTree|null>(null);

    const onNewTree = (tree: IFamTree) => {
        doNewTree(tree);
        setShow(false);
    }

    const handleSelect = (famTree: IFamTree) => setSelected(famTree);

    const MapComponent = (famTree: IFamTree) => {
        return <TreeListElement key={famTree.getId()} onClick={()=>{ handleSelect(famTree) }} famTree={famTree}/>
    }
    const filter = (famTree: IFamTree, search:string): boolean =>
        famTree.getName().toLowerCase().includes(search.toLowerCase())

    return (
        <>
            {!selected &&
            <Container>
                <H1Title red="Family" white=' trees' caps/>

                <EntitySearch Map={MapComponent} filter={filter} options={trees} loading={loading} emptyList='Looks like no trees yet.'/>

                <CreateNewTree show={show} onCreate={onNewTree} onCancel={() => setShow(false)}/>
                <FlyButton onClick={() => setShow(true)} icon='go-add'/>
            </Container>}
            {selected && children(selected, () => setSelected(null)) }
        </>
    );
}
