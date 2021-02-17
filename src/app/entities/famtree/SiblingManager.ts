import Person from "../person/Person";

class SiblingManager {

    sibling: Person;

    constructor(sibling: Person) {
        this.sibling = sibling;
    }

    addSibling(sibling: Person): boolean {
        // Add both parents from base sibling
        return true;
    }

    removeSibling(sibling: Person): boolean {
        return true;
    }

}

export default SiblingManager;