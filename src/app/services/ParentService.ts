import IParentService from "../interfaces/IParentService";
import IPerson from "../interfaces/IPerson";
import IParentMap from "../interfaces/IParentMap";

class ParentService implements IParentService {

    parentMap: IParentMap

    constructor(parentMap: IParentMap) {
        this.parentMap = parentMap;
    }

    getChildren(person: IPerson): IPerson[] {
        return [];
    }

    getOldestChild(person: IPerson): IPerson {
        return person;
    }

    getYoungestChild(person: IPerson): IPerson {
        return person;
    }

}

export default ParentService;