import TreeListElement from "./treeSelection/TreeListElement";
import CreateNewTree from "./treeSelection/CreateNewTree";
import Search from "./common/RedFormControl";
import {ChangeEvent, Component} from "react";
import H1Title from "./common/H1Title";
import IRepository from "../../app/services/repository/IRepository";
import FlyButton from "./common/FlyButton";
import IFamTree from "../../app/interfaces/IFamTree";
import Container from "react-bootstrap/Container";
import FamTree from "../../app/entities/famtree/FamTree";

type Props = {
    trees: IFamTree[],
    treeRepository: IRepository,
    onSelect: Function,
}

type State = {
    show: boolean,
    search: string,
    options: IFamTree[]
}

class TreeSelection extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            show: false,
            search: '',
            options: []
        }
    }

    async componentDidMount() {
        const trees = await this.props.treeRepository.getListAsync() as FamTree[] as IFamTree[]
        this.setState({ options: trees})
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
        const { trees } = this.props
        if (prevProps.trees.length !== trees.length) {
            this.setState({options: trees})
        }
    }

    handleSearch = (e: ChangeEvent<HTMLInputElement>) => this.setState({search: e.target.value})

    handleShow = () => this.setState({show: true});
    handleClose = () => this.setState({show: false});

    handleCreateTree = (tree: IFamTree) => {
        this.props.treeRepository.addAsync(tree as FamTree);
    }

    render() {
        const { show, search, options } = this.state;
        const { onSelect } = this.props;

        const filtered = options.filter(famTree => famTree.getName().toLowerCase().includes(search.toLowerCase()))
        return (
            <>
                <H1Title red="Family" white=' trees' caps/>

                <Container>
                    <Search onChange={this.handleSearch} value={search} />
                    { filtered.map(famTree => <TreeListElement key={famTree.getId()} onClick={()=>{ onSelect(famTree) }} famTree={famTree}/>) }
                </Container>

                <CreateNewTree show={show} onCreate={this.handleCreateTree} onCancel={this.handleClose}/>
                <FlyButton onClick={this.handleShow} icon='go-add'/>
            </>
        );
    }
}
export default TreeSelection;