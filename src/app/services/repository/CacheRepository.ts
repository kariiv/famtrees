import IRepository from "./IRepository";
import BaseEntity from "../../entities/BaseEntity";

class CacheRepository implements IRepository {

    _cache: { [p: number]: BaseEntity };
    repo: IRepository;

    constructor(repository: IRepository) {
        this.repo = repository;
        this._cache = {}
    }

    getById(id: number): BaseEntity | null {
        if (id in this._cache)
            return this._cache[id]

        const entity = this.repo.getById(id)
        if (!entity) return null;

        this._cache[entity.getId()] = entity
        return entity;
    }

    getList(): BaseEntity[] {
        const getList = this.repo.getList()
        // Todo: Merge list data with missing objects
        for (const item of getList)
            if (!(item.getId() in this._cache))
                this._cache[item.getId()] = item;
        return getList;
    }

    add(entity: BaseEntity): BaseEntity {
        const added = this.repo.add(entity)
        // Todo: If not added then null or whatever.
        this._cache[added.getId()] = added;
        return added;
    }

    update(entity: BaseEntity): BaseEntity {
        const update = this.repo.update(entity)
        this._cache[update.getId()] = update;
        return update;
    }

    delete(id: number): object {
        const res = this.repo.delete(id);
        // Todo: If not happened then dont remove.
        delete this._cache[id];
        return res;
    }
}

export default CacheRepository;