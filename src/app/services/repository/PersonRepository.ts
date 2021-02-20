import Person from "../../entities/person/Person";
import BaseRepository from "./BaseRepository";


class PersonRepository extends BaseRepository {

    async addAsync(entity: Person): Promise<Person> {
        return Person.Dummy;
    }

    async deleteAsync(id: number): Promise<object> {
        return {};
    }

    async getByIdAsync(id: number): Promise<Person | null> {
        await fetch(this.endpoint.getById + id)

        return Person.Dummy;
    }

    async getListAsync(props?: any): Promise<Person[]> {
        return [Person.Dummy,Person.Dummy,Person.Dummy];
    }

    async updateAsync(entity: Person): Promise<Person> {
        return entity;
    }

}
export default PersonRepository;