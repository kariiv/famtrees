import FamTree from "./FamTree";
import Person from "../person/Person";

class ParentManager {

    constructor(tree: FamTree) {

    }

    addChild(child: Person): boolean {
        return true;
    }

    removeChild(): boolean {
        return true;
    }
}

export default ParentManager;