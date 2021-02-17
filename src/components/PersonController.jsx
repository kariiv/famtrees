import React, {Component} from 'react';
import PersonSelection from "./pages/PersonSelection";
import Person from "../app/entities/person/Person";
import PersonDetails from "./pages/PersonDetails";

class PersonController extends Component {

    constructor(props) {
        super(props);

        const {famTree} = props;

        famTree.addPerson(new Person(1, 'Merili', 'Mihkli'));
        famTree.addPerson(new Person(2, 'Maali', 'Mihklison'));
        famTree.addPerson(new Person(3, 'Merka', 'Mihkli'));
        famTree.addPerson(new Person(4, 'Merill', 'Mihkli'));
        famTree.addPerson(new Person(5, 'Meri', 'Mihkli'));
        famTree.addPerson(new Person(6, 'Musi', 'Mihkli'));

        this.state = {
            selectedPerson: null
        }
    }

    handleSelect = (person) => {
        this.setState({selectedPerson: person})
    }

    removeSelection = () => {
        this.setState({selectedPerson: null})
    }

    render() {
        const {selectedPerson} = this.state;
        const { famTree } = this.props;


        return (
            <>
                {!selectedPerson && <PersonSelection onSelect={this.handleSelect} options={famTree.getPeople()} famTree={famTree}/>}

                <PersonDetails person={selectedPerson} />
            </>
        );
    }
}

export default PersonController;