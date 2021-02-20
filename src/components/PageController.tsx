import React, {Component} from 'react';
import ConnectionConfiguration from "../app/services/providers/ConnectionConfiguration";
import IRepository from "../app/services/repository/IRepository";
import TreeController from "./TreeController";
import FamTree from "../app/entities/famtree/FamTree";
import Person from "../app/entities/person/Person";

type Props = {
    connection: ConnectionConfiguration
};

type State = {
    treeRepository: IRepository,
    trees: FamTree[],
    personRepository: IRepository,
    people: Person[]
};

class PageController extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        // const treeRepository = new CacheRepository(new TreeRepository(new EndpointConfigured(TreeEndpoint, props.connection)));
        // const personRepository = new CacheRepository(new PersonRepository(new EndpointConfigured(PersonEndpoint, props.connection)));
        //
        // treeRepository.on(Event.All, async () => {
        //     this.setState({treeRepository, trees: treeRepository.getEntities() as FamTree[] })
        // });
        //
        // personRepository.on(Event.All, async () => {
        //     this.setState({personRepository, people: personRepository.getEntities() as Person[]})
        // });

        // this.state = {
        //     trees: [],
        //     people: []
        // }
    }

    render() {
        const { treeRepository, personRepository, trees, people } = this.state;
        console.log(trees)

        return (
            <TreeController personRepository={personRepository} treeRepository={treeRepository} trees={trees} people={people}/>
        );
    }
}

export default PageController;