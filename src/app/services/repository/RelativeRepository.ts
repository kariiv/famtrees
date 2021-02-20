import Person from "../../entities/person/Person";
import BaseRepository from "./BaseRepository";

class RelativeRepository extends BaseRepository {

    async getListAsync(id:any): Promise<Person[]> {
        return [Person.Dummy,Person.Dummy,Person.Dummy];
    }

}
export default RelativeRepository;