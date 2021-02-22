import IPerson from "./IPerson";

interface ISiblingManager {

    addSibling(sibling1: IPerson, sibling2: IPerson): void;

    removeSibling(sibling1: IPerson, sibling2: IPerson): void;

}

export default ISiblingManager;