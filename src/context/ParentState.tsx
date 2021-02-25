import React, {Component} from 'react';
import { Create, Delete, ListTreeParents } from "../app/endpoints/PersonParentEndpoints";
import ParentContext from "./ParentContext";
import IPerson from "../app/interfaces/IPerson";
import PersonParent from "../app/interfaces/PersonParent";
import TreeContext from "./TreeContext";

type State = {
    parents: PersonParent[],
}

type Props = {
}

class ParentState extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            parents: []
        }
    }

    static contextType = TreeContext;

    componentDidMount() {
        this.reloadParents()
    }

    reloadParents = async () => {
        console.log('Loading parent')
        this.setState({parents: await ListTreeParents(this.context.selectedTree)})
    }
    addParent = async (person: IPerson, parent: IPerson) => {
        if (await Create(person, parent)) {
            const personParent: PersonParent = {personId: person.getId(), parentId: parent.getId()}
            this.setState({parents: [...this.state.parents, personParent] })
        }
    }
    removeParent = async (person: IPerson, parent: IPerson) => {
        if (await Delete(person, parent))
            this.setState({
                parents: [...this.state.parents].filter(
                    ({personId, parentId}) => personId !== person.getId() && parentId !== parent.getId())})
    }

    render() {
        const { parents } = this.state;
        const { addParent, removeParent, reloadParents } = this;

        return (
            <ParentContext.Provider value={{
                parents,
                reloadParents,
                addParent,
                removeParent
            }}>{this.props.children}</ParentContext.Provider>)
    }
}

export default ParentState;