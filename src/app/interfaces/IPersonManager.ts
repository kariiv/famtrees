import IPerson from "./IPerson";

interface ISiblingManager {

    removePerson(person: IPerson): void;

    addPerson(person: IPerson): void;

    updatePerson(person: IPerson): void;

}

export default ISiblingManager;