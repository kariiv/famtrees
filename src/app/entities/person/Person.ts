import BaseEntity from "../BaseEntity";
import IPerson from "../../interfaces/IPerson";

class Person extends BaseEntity implements IPerson {

    id: number;
    firstName: string;
    lastName: string;
    static Dummy: Person;

    constructor(id: number, firstName: string, lastName: string) {
        super(id);
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getId(): number {
        return this.id;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    toString():string {
        return `${this.getId()}: ${this.getFirstName()} ${this.getLastName()}`
    }
}

Person.Dummy = new Person(0, 'Dummy', 'Person')

export default Person;

