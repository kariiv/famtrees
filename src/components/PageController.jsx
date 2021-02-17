import React, {Component} from 'react';
import TreeSelection from "./pages/TreeSelection";
import FamTree from "../app/entities/famtree/FamTree";
import PersonController from "./PersonController";
import Person from "../app/entities/person/Person";
import PersonDetails from "./pages/PersonDetails";
import PersonEdit from "./pages/PersonEdit";
import GraphPhone from "./pages/GraphPhone";
import CacheRepository from "../app/services/repository/CacheRepository";
import TreeRepository from "../app/services/repository/TreeRepository";
import PersonRepository from "../app/services/repository/PersonRepository";

class PageController extends Component {

    constructor(props) {
        super(props);

        const treeRepository = new CacheRepository(new TreeRepository(props.connection));
        const personRepository = new CacheRepository(new PersonRepository(props.connection));

        this.state = {
            treeRepo: treeRepository,
            personRepo: personRepository,
            selectedTree: null
        }
    }

    componentDidMount() {

    }

    handleSelect = (famTree) => {
        this.setState({selectedTree: famTree})
    }

    removeSelection = () => {
        this.setState({selectedTree: null})
    }

    render() {
        const { selectedTree, people, famTrees} = this.state;

        const person = new Person(6, 'Musi', 'Mihkli');

        return (
            <>
                {/*{!selectedTree && <TreeSelection onSelect={this.handleSelect} options={famTrees}/>}*/}
                {/*{selectedTree && <PersonController people={people} famTree={selectedTree} backToMenu={this.removeSelection}/>}*/}
                {/*<PersonDetails person={person}/>*/}
                <GraphPhone/>
            </>
        );
    }
}

export default PageController;