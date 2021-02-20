import BaseEntity from "../BaseEntity";
import IPerson from "../../interfaces/IPerson";
import Sex from "./Sex";

class Person extends BaseEntity implements IPerson {

    id: number;
    firstName: string;
    lastName: string;
    sex: Sex;
    birthday: string;
    deathDate: string;
    treeId: number;

    static Dummy: Person;

    constructor(id: number, firstName: string, lastName: string, sex: Sex, treeId: number, birthday: string, deathDate: string) {
        super(id);
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.sex = sex;
        this.treeId = treeId;
        this.birthday = birthday;
        this.deathDate = deathDate;
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

    getBirthday(): string {
        return this.birthday;
    }

    getDeathDate(): string {
        return this.deathDate;
    }

    getSex(): Sex {
        return this.sex;
    }

    getTreeId(): number {
        return this.treeId;
    }

    isAlive(): boolean {
        return true
    }
}

Person.Dummy = new Person(0, 'Dummy', 'Person', Sex.MALE, 1, '', '')

export default Person;
