import React, {Component} from 'react';
import TreeSelection from "./pages/TreeSelection";
import FamTree from "../app/entities/famtree/FamTree";
import PersonController from "./PersonController";
import Person from "../app/entities/person/Person";
import PersonDetails from "./pages/PersonDetails";
import PersonEdit from "./pages/PersonEdit";
import GraphPhone from "./pages/GraphPhone";

class PageController extends Component {

    constructor(props) {
        super(props);

        this.state = {
            famTrees: [],
            people: { },
            selectedTree: null
        }
    }

    componentDidMount() {
        const famTrees = []
        famTrees.push(new FamTree(1, "Madise"))
        famTrees.push(new FamTree(2, "Mihkli"))
        famTrees.push(new FamTree(3, "Mõtuse"))
        this.setState({famTrees})
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