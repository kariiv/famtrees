import IRepository from "./IRepository";
import IEndpoint from "../endpoints/IEndpoint";
import BaseEntity from "../../entities/BaseEntity";

class BaseRepository implements IRepository {

    endpoint: IEndpoint;

    constructor(endpoint: IEndpoint) {
        this.endpoint = endpoint;
    }

    async getByIdAsync(id: number): Promise<BaseEntity | null> {
        throw new Error('Not implemented');
    }

    async getListAsync(id:any): Promise<BaseEntity[]> {
        throw new Error('Not implemented');
    }

    async addAsync(entity: BaseEntity): Promise<BaseEntity> {
        throw new Error('Not implemented');
    }

    async updateAsync(entity: BaseEntity): Promise<BaseEntity> {
        throw new Error('Not implemented');
    }

    async deleteAsync(id: number): Promise<object> {
        throw new Error('Not implemented');
    }
}

export default BaseRepository;