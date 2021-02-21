import IParentManager from "../interfaces/IParentManager";
import IPerson from "../interfaces/IPerson";

class ParentManager implements IParentManager {

    constructor() {

    }

    addChild(child: IPerson): boolean {
        return true;
    }

    removeChild(): boolean {
        return true;
    }
}

export default ParentManager;