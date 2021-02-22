import IChildService from "./IChildService";
import IPerson from "../interfaces/IPerson";
import IParentMap from "../interfaces/IParentMap";

class ChildService implements IChildService {

    parentMap: IParentMap
    people: IPerson[]

    constructor(parentMap: IParentMap, people: IPerson[]) {
        this.parentMap = parentMap;
        this.people = people;
    }

    getParents(person: IPerson): IPerson[] {
        if (!(person.getId() in this.parentMap))
            return []

        const ids = this.parentMap[person.getId()]

        return ids.map(id => this.getPerson(id));
    }

    getPerson(id: number) {
        const items = this.people.filter(p => p.getId() === id);
        if (items.length === 0)
            console.warn("Id was not found.")
        return items[0];
    }
}

export default ChildService