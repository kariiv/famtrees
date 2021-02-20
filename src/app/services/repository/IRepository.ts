import BaseEntity from "../../entities/BaseEntity";

interface IRepository {

    getByIdAsync(id: number): Promise<BaseEntity | null>;

    getListAsync(props?: any): Promise<BaseEntity[]>;

    addAsync(entity: BaseEntity): Promise<BaseEntity>;

    updateAsync(entity: BaseEntity): Promise<BaseEntity>;

    deleteAsync(id: number): Promise<object>;

}

export default IRepository;