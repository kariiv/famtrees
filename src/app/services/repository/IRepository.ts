import BaseEntity from "../../entities/BaseEntity";

interface IRepository {

    getById(id: number): BaseEntity | null;

    getList(): BaseEntity[];

    add(entity: BaseEntity): BaseEntity;

    update(entity: BaseEntity): BaseEntity;

    delete(id: number): object;

}

export default IRepository;