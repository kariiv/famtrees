import IParentService from "./IParentService";
import IPerson from "../interfaces/IPerson";
import IParentMap from "../interfaces/IParentMap";

class ParentService implements IParentService {

    parentMap: IParentMap;
    people: IPerson[];

    constructor(parentMap: IParentMap, people: IPerson[]) {
        this.parentMap = parentMap;
        this.people = people;
    }

    getChildren(person: IPerson): IPerson[] {
        const ids: number[] = []
        for (const [child, parents] of Object.entries(this.parentMap)) {
            if (parents.includes(person.getId())) {
                // @ts-ignore
                ids.push(child)
            }
        }
        return ids.map(id => this.getPerson(id));
    }

    getOldestChild(person: IPerson): IPerson|null {
        const children = this.getChildren(person)
        let minVal = null;
        let min: IPerson|null = null
        for (const child of children) {
            const date = new Date(child.getBirthday())
            if (!minVal || minVal > date) {
                minVal = date;
                min = child;
            }
        }
        return min;
    }

    getYoungestChild(person: IPerson): IPerson|null {
        const children = this.getChildren(person)
        let maxVal = null;
        let max: IPerson|null = null
        for (const child of children) {
            const date = new Date(child.getBirthday())
            if (!maxVal || maxVal < date) {
                maxVal = date;
                max = child;
            }
        }
        return max;
    }

    getPerson(id: number) {
        const items = this.people.filter(p => p.getId() === id);
        if (items.length === 0)
            console.warn("Id was not found.")
        return items[0];
    }
}

export default ParentService;