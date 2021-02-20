import Search from "./common/RedFormControl";
import {ChangeEvent, Component} from "react";
import CreateNewPerson from "./personSelection/CreateNewPerson";
import PersonListElement from "./personSelection/PersonListElement";
import H1Title from "./common/H1Title";
import IFamTree from "../../app/interfaces/IFamTree";
import IPerson from "../../app/interfaces/IPerson";
import FlyButton from "./common/FlyButton";
import Container from "react-bootstrap/Container";

type Props = {
    onSelect: Function,
    famTree: IFamTree
}
type State = {
    search: string,
    show: boolean,

}

class PersonSelection extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            search: "",
            show: false,

        }
    }

    handleSearch = (e: ChangeEvent<HTMLInputElement>) => this.setState({search: e.target.value})
    handleShow = () => this.setState({show: true});
    handleClose = () => this.setState({show: false});

    handleCreateNewPerson = (person: IPerson) => {
        // Todo: Handle Create new person
    }

    render() {
        const { search, show } = this.state;
        const { onSelect, famTree } = this.props;

        const options = famTree.getPeople().filter(person => (person.getFirstName() + person.getLastName()).toLowerCase().includes(search.toLowerCase()))

        return (
            <>
                <H1Title red={famTree.getName()} caps/>

                <Container>
                    <Search onChange={this.handleSearch} value={search} />
                    { options.map(person => <PersonListElement key={person.getId()} onClick={()=>{ onSelect(person) }} person={person}/>) }
                </Container>

                <CreateNewPerson onCreate={this.handleCreateNewPerson} show={show} onCancel={this.handleClose}/>

                <FlyButton onClick={this.handleShow} icon='go-add'/>
            </>
        );
    }
}

export default PersonSelection;