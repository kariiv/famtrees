import IRepository from "./IRepository";
import BaseEntity from "../../entities/BaseEntity";
import CacheRepository from "./CacheRepository";

class CacheRepositoryWrapper implements IRepository {

    _cache: { [p: number]: BaseEntity };
    repo: IRepository;

    constructor(repository: CacheRepository, ) {
        this.repo = repository;
        this._cache = {}
    }

    async getByIdAsync(id: number): Promise<BaseEntity | null> {
        if (id in this._cache)
            return this._cache[id]

        const entity = await this.repo.getByIdAsync(id)
        if (!entity) return null;

        this._cache[entity.getId()] = entity
        return entity;
    }

    async getListAsync(props: any): Promise<BaseEntity[]> {
        const getList = await this.repo.getListAsync(props)
        // Todo: Merge list data with missing objects
        for (const item of getList)
            if (!(item.getId() in this._cache))
                this._cache[item.getId()] = item;
        return getList;
    }

    async addAsync(entity: BaseEntity): Promise<BaseEntity> {
        const added = await this.repo.addAsync(entity)
        // Todo: If not added then null or whatever.
        this._cache[added.getId()] = added;
        return added;
    }

    async updateAsync(entity: BaseEntity): Promise<BaseEntity> {
        const update = await this.repo.updateAsync(entity)
        this._cache[update.getId()] = update;
        return update;
    }

    async deleteAsync(id: number): Promise<object> {
        const res = await this.repo.deleteAsync(id);
        // Todo: If not happened then dont remove.
        delete this._cache[id];
        return res;
    }

}

export default CacheRepositoryWrapper;