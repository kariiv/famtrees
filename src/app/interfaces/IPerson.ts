import Sex from '../entities/person/Sex'

interface IPerson {

    getId(): number;

    getFirstName(): string;

    getLastName(): string;

    getSex(): Sex;

    getBirthday(): string;

    getDeathDate(): string;

    getTreeId(): number;

    isAlive(): boolean
}

export default IPerson;