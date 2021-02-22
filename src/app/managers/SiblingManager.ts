import IPerson from "../interfaces/IPerson";
import ISiblingManager from "../interfaces/ISiblingManager";

class SiblingManager implements ISiblingManager {

    constructor() {

    }

    addSibling(sibling1: IPerson, sibling2: IPerson) {
        // Add both parents from base sibling
        return true;
    }

    removeSibling(sibling1: IPerson, sibling2: IPerson) {
        // Add both parents from base sibling
        return true;
    }

}

export default SiblingManager;