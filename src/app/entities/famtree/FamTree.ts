import Person from "../person/Person";

class FamTree {

    id: number;
    name: string;
    people: {[id:number]: Person};
    treeChildren: { [id:number]: number[] };
    treeParents: { [id:number]: number[] };
    treeSize: number;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.people = [];
        this.treeSize = 0
        this.treeChildren = {}
        this.treeParents = {}
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    addPerson(person: Person): void {
        if (!(person.getId() in this.people))
            this.people[person.getId()] = person;
    }

    addParent(kid: number, parent: number): void {
        this.addToDictList(this.treeParents, kid, parent)
        this.addToDictList(this.treeChildren, parent, kid)
    }

    addToDictList(dict: any, key: number, value: number) {
        if (key in dict) {
            const l = (dict[key]) as Array<number>;
            if (!l.includes(value))
                l.push(value)
        }
        else
            dict[key] = [value]
    }

    getChildren(id: number): Person[] {
        if (id in this.treeChildren)
            return this.treeChildren[id].map(id => this.people[id]);
        return []
    }

    getParents(id: number): Person[] {
        if (id in this.treeParents)
            return this.treeParents[id].map(id => this.people[id]);
        return []
    }

    getPeople(): Person[] {
        return Object.values(this.people);
    }

    getNumberOfMembers(): number {
        return this.treeSize;
    }

    toString(): string {
        return `${this.getId()}, ${this.getName()}`
    }
}


export default FamTree;