import Person from "../person/Person";
import BaseEntity from "../BaseEntity";
import IFamTree from "../../interfaces/IFamTree";

class FamTree extends BaseEntity implements IFamTree {

    name: string;
    people: {[id:number]: Person};
    treeSize: number;

    constructor(id: number, name: string) {
        super(id);
        this.id = id;
        this.name = name;
        this.treeSize = 0
        this.people = {}
    }

    getName(): string {
        return this.name;
    }

    addPerson(person: Person): void {
        if (!(person.getId() in this.people))
            this.people[person.getId()] = person;
    }

    getPeople(): Person[] {
        return Object.values(this.people);
    }

    toString(): string {
        return `${this.getId()}, ${this.getName()}`
    }

    getPeopleMap(): {[id:number]: Person} {
        return this.people;
    }
}


export default FamTree;