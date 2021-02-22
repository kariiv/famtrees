import ISpouseService from "./ISpouseService";
import IPerson from "../interfaces/IPerson";
import IParentMap from "../interfaces/IParentMap";

class SpouseService implements ISpouseService {

    parentMap: IParentMap
    people: IPerson[]

    constructor(parentMap: IParentMap, people: IPerson[]) {
        this.parentMap = parentMap;
        this.people = people;
    }

    getSpouses(person: IPerson): IPerson[] {
        const ids: number[] = []
        for (const parents of Object.values(this.parentMap)) {
            let save = 0
            let was = false
            for (const id of parents) {
                if (was) ids.push(id)
                if (id === person.getId()) {
                    if (save) ids.push(save)
                    was = true
                }
                save = id
            }
        }
        return ids.map(id => this.getPerson(id));
    }

    getPerson(id: number) {
        const items = this.people.filter(p => p.getId() === id);
        if (items.length === 0)
            console.warn("Id was not found.")
        return items[0];
    }
}

export default SpouseService;