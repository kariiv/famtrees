import IPerson from "../interfaces/IPerson";
import IParentManager from "../interfaces/IParentManager";

class ParentManager implements IParentManager {

    add: Function;
    remove: Function;

    constructor(add: Function, remove: Function) {
        this.add = add;
        this.remove = remove;
    }

    addParent(child: IPerson, parent: IPerson) {
        this.add(child, parent);
    }

    removeParent(child: IPerson, parent: IPerson) {
        this.remove(child, parent);
    }
}

export default ParentManager