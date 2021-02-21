import IPerson from "../interfaces/IPerson";
import IChildManager from "../interfaces/IChildManager";

class ChildManager implements IChildManager {

    constructor() {

    }

    addParent(child: IPerson): boolean {
        return false;
    }

    removeParent(): boolean {
        return false;
    }
}

export default ChildManager