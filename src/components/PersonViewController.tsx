import React, {Component} from 'react';
import IRepository from "../app/services/repository/IRepository";
import IPerson from "../app/interfaces/IPerson";
import GraphPhone from "./pages/GraphPhone";
import PersonDetailsController from "./PersonDetailsController";

enum Views {
    DETAILS,
    PHONE,
    DESKTOP
}

type Props = {
    personRepository: IRepository,
    person: IPerson
};
type State = {
    view: Views
};

class PersonController extends Component<Props, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            view: Views.PHONE
        }
    }

    handleViewSelection = (view: Views) => {
        this.setState({view})
    }

    render() {
        const { view } = this.state;
        const { person, personRepository } = this.props;

        return (
            <>
                { view === Views.PHONE && <GraphPhone onViewChange={this.handleViewSelection} person={person} personRepository={personRepository}/>}
                { view === Views.DETAILS && <PersonDetailsController personRepository={personRepository} person={person} onViewChange={this.handleViewSelection}/>}
                {/*{ view === Views.DESKTOP && <GraphPhone/>}*/}
            </>
        );
    }
}

export default PersonController;
export const View = Views;