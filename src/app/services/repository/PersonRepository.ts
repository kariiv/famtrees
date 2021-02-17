import BaseConnection from "../providers/BaseConnection";
import IRepository from "./IRepository";
import Person from "../../entities/person/Person";

class PersonRepository implements IRepository {

    connection: BaseConnection;

    constructor(connection: BaseConnection) {
        this.connection = connection
    }

    add(entity: Person): Person {
        return new Person(1, entity.getFirstName(), entity.getLastName());
    }

    delete(id: number): object {
        return {};
    }

    getById(id: number): Person | null {
        return new Person(id, 'Mihkel', 'Muumi');
    }

    getList(): Person[] {

        return [new Person(1, 'Miku', 'Meeri'),new Person(2, 'Mihkel', 'Muumi'),new Person(3, 'Mari', 'Maasikas')];
    }

    update(entity: Person): Person {
        return entity;
    }
}
export default PersonRepository;