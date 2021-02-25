import React, {Component} from 'react';
import IPerson from "../app/interfaces/IPerson";
import {PersonView} from "../app/constants";

import PersonContext from "../context/PersonContext";
import PersonSelection from "./pages/PersonSelection";
import PersonDetailsController from "./PersonDetailsController";
import GraphPhone from "./pages/GraphPhone";
import ViewContext from "../context/ViewContext";

type State = {
    breadcrumb: IPerson[],
    view: PersonView,
};
type Props = {
};


class PersonViewSwitcher extends Component<Props,State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            breadcrumb: [],
            view: PersonView.PHONE,
        }
    }
    static contextType = PersonContext;

    handleSelection = (person: IPerson, view: PersonView) => {
        this.changeView(view);
        this.pushBreadcrumb(person);
    }

    changeView = (view: PersonView) => this.setState({view})
    clearBreadcrumb = () => this.setState({breadcrumb : []})

    pushBreadcrumb = (person: IPerson) => {
        const { breadcrumb } = this.state;

        const index = breadcrumb.indexOf(person);
        if (index !== -1) // Person already in breadcrumb, removing loops
        {
            console.log("already in")
            return this.setState({breadcrumb: breadcrumb.slice(0, index + 1)})
        }
        console.log("Adding")
        this.setState({breadcrumb: [...breadcrumb, person]})
    }

    popBreadcrumb = () => {
        const breadcrumb = [...this.state.breadcrumb];
        breadcrumb.pop()
        this.setState({breadcrumb})
    }

    render() {
        const { breadcrumb, view} = this.state;

        if (breadcrumb.length === 0)
            return <PersonSelection onSelect={this.handleSelection}/>

        const { familyMembers } = this.context;
        const familyMember = familyMembers[breadcrumb[breadcrumb.length -1].getId()]

        let View;
        switch (view) {
            case PersonView.DESKTOP:
                View = <h1 className="text-center pt-5">Not implemented yet!</h1>
                break
            case PersonView.DETAILS:
                View = <PersonDetailsController familyMember={familyMember} breadcrumb={breadcrumb} />
                break
            case PersonView.PHONE:
                View = <GraphPhone familyMember={familyMember} breadcrumb={breadcrumb} />
                break
            default:
                View = <h1 className="text-center pt-5">Something went wrong!</h1>
                break
        }

        const { changeView, popBreadcrumb, pushBreadcrumb, clearBreadcrumb } = this
        return (
            <ViewContext.Provider value={{pushBreadcrumb, popBreadcrumb, clearBreadcrumb, changeView}}>
                {View}
            </ViewContext.Provider>
        );
    }
}

export default PersonViewSwitcher;
