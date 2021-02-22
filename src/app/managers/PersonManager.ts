import IPersonManager from "../interfaces/IPersonManager";
import IPerson from "../interfaces/IPerson";

class PersonManager implements IPersonManager {

    add: Function;
    remove: Function;
    update: Function;

    constructor(add: Function, remove: Function, update: Function) {
        this.add = add;
        this.remove = remove;
        this.update = update;
    }

    addPerson(person: IPerson) {
        return this.add(person);
    }

    removePerson(person: IPerson) {
        return this.remove(person);
    }

    updatePerson(person: IPerson) {
        return this.update(person);
    }

}

export default PersonManager;