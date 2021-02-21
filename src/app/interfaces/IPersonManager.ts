import IPerson from "../entities/person/Person";

interface ISiblingManager {

    removePerson(person: IPerson): boolean;

    addPerson(person: IPerson): boolean;

    updatePerson(person: IPerson): boolean;

}

export default ISiblingManager;