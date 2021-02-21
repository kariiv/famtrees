import React, {Component} from 'react';
import { Create, Delete, ListTreeParents } from "../app/endpoints/PersonParentEndpoints";
import IFamTree from "../app/interfaces/IFamTree";
import IPerson from "../app/interfaces/IPerson";
import IParentMap from "../app/interfaces/IParentMap";

type State = {
    parents: IParentMap
}

type Props = {
    tree: IFamTree,
    children: Function
}

class ParentController extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            parents: []
        }
    }

    async componentDidMount() {
        const { parents } = this.state;

        const items = await ListTreeParents(this.props.tree);
        console.log(items);
        const keyData: IParentMap = {}
        for (const item of items) {
            const {personId, parentId} = item
            if (personId in parents)
                keyData[personId].push(parentId)
            else
                keyData[personId] = [parentId, ]
        }

        this.setState({parents: keyData})
    }

    addParent = async (person: IPerson, parent: IPerson) => {
        if (await Create(person, parent)) {
            if (person.getId() in this.state.parents)
                this.state.parents[person.getId()].push(parent.getId());
            else
                this.state.parents[person.getId()] = [parent.getId(), ]
        }
    }

    removeParent = async (person: IPerson, parent: IPerson) => {
        if (await Delete(person, parent)) {
            if (person.getId() in this.state.parents)
                this.state.parents[person.getId()].push(parent.getId());
            else
                this.state.parents[person.getId()] = [parent.getId(), ]
        }
    }

    render() {
        const { children } = this.props;
        const { parents } = this.state;

        // @ts-ignore
        return children(parents, this.addParent, this.removeParent);
    }
}

export default ParentController;