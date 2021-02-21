import IPerson from "../entities/person/Person";

interface ISiblingManager {

    addSibling(sibling1: IPerson, sibling2: IPerson): boolean;

    removeSibling(sibling1: IPerson, sibling2: IPerson): boolean;

}

export default ISiblingManager;