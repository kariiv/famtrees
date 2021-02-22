import {Component} from 'react';
import { Create, Delete, ListTreeParents } from "../app/endpoints/PersonParentEndpoints";
import IFamTree from "../app/interfaces/IFamTree";
import IPerson from "../app/interfaces/IPerson";
import IParentMap from "../app/interfaces/IParentMap";
import ParentManager from "../app/managers/ParentManager";

type State = {
    parents: IParentMap,
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

        console.log("ParentController", items)
        const keyData: IParentMap = {}
        for (const item of items) {
            const {personId, parentId} = item
            if (personId in keyData)
                keyData[personId].push(parentId)
            else
                keyData[personId] = [parentId, ]
        }

        console.log("ParentController", keyData)
        this.setState({parents: keyData})
    }

    addParent = async (person: IPerson, parent: IPerson) => {
        console.log("ParentController", person, parent)

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

        const parentManager = new ParentManager(this.addParent, this.removeParent);

        // @ts-ignore
        return children(parents, parentManager);
    }
}

export default ParentController;