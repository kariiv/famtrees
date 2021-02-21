import IChildService from "../interfaces/IChildService";
import IPerson from "../interfaces/IPerson";
import IParentMap from "../interfaces/IParentMap";

class ChildService implements IChildService {

    parentMap: IParentMap

    constructor(parentMap: IParentMap) {
        this.parentMap = parentMap;
    }

    getParents(person: IPerson): IPerson[] {
        return [];
    }
}

export default ChildService