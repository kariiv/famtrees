import ISiblingService from "../interfaces/ISiblingService";
import Person from "../entities/person/Person";
import IPerson from "../interfaces/IPerson";
import IParentMap from "../interfaces/IParentMap";

class SiblingService implements ISiblingService {

    parentMap: IParentMap

    constructor(parentMap: IParentMap) {
        this.parentMap = parentMap;
    }

    getBrothers(person: IPerson): Person[] {
        return [];
    }

    getSisters(person: IPerson): Person[] {
        return [];
    }

    getSiblings(person: IPerson): Person[] {
        return [];
    }

    getYoungestSibling(person: IPerson): Person {
        return Person.Dummy;
    }
}

export default SiblingService;