import ISiblingService from "./ISiblingService";
import Person from "../entities/person/Person";
import IPerson from "../interfaces/IPerson";
import IParentMap from "../interfaces/IParentMap";

class SiblingService implements ISiblingService {

    parentMap: IParentMap;
    people: IPerson[];

    constructor(parentMap: IParentMap, people: IPerson[]) {
        this.parentMap = parentMap;
        this.people = people;
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

    getPerson(id: number) {
        const items = this.people.filter(p => p.getId() === id);
        if (items.length === 0)
            console.warn("Id was not found.")
        return items[0];
    }
}

export default SiblingService;