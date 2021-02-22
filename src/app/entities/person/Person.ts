import BaseEntity from "../BaseEntity";
import IPerson from "../../interfaces/IPerson";
import Sex from "./Sex";

function getDateFormat(date: string | Date) {
    const reDate = new Date(date)
    const day = reDate.getDate().toString();
    const month = (reDate.getMonth() + 1).toString();
    const year = reDate.getFullYear().toString();

    return `${year.padStart(4, '0')}-${month.padStart(2,'0')}-${day.padStart(2, '0')}`
}

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
        this.birthday = getDateFormat(birthday? birthday: new Date('0001-01-01'));
        this.deathDate = getDateFormat(deathDate? deathDate: new Date('0001-01-01'))
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
        return `${this.getId()}: ${this.getFirstName()} ${this.getLastName()}, ${this.getSex() === Sex.MALE ? 'Male' : 'Female'}, ${this.getTreeId()}`
    }

    getBirthday(): string {
        return getDateFormat(this.birthday);
    }

    getDeathDate(): string {
        return getDateFormat(this.deathDate);
    }

    getSex(): Sex {
        return this.sex;
    }

    getTreeId(): number {
        return this.treeId;
    }

    isAlive(): boolean {
        return new Date(this.getDeathDate()) < new Date('0002-02-02');
    }
}

Person.Dummy = new Person(0, 'Dummy', 'Person', Sex.MALE, 1, '', '')

export default Person;
