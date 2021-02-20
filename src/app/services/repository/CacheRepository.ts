import IRepository from "./IRepository";
import BaseEntity from "../../entities/BaseEntity";

type Events = {[id:string]: Function[]}

enum event {
    GetById,
    GetList,
    Add,
    Update,
    Delete,
    All
}

class CacheRepository implements IRepository {

    _cache: { [p: number]: BaseEntity };
    repo: IRepository;

    events: Events;

    constructor(repository: IRepository) {
        this.repo = repository;
        this._cache = {};
        this.events = {};
    }

    emit(type: event) {
        if (type in this.events)
            for (const f of this.events[type]) f()
        if (event.All in this.events) {
            for (const f of this.events[event.All]) f()
            console.log('Events called')
        }
    }
    on(type:event, callback: Function) {
        if (type in this.events) this.events[type].push(callback)
        else this.events[type] = [callback, ]
    }

    getEntities(): BaseEntity[] {
        return Object.values(this._cache);
    }

    async getByIdAsync(id: number): Promise<BaseEntity | null> {
        if (id in this._cache)
            return this._cache[id]

        const entity = await this.repo.getByIdAsync(id)
        if (!entity) return null;

        this._cache[entity.getId()] = entity
        this.emit(event.GetById);
        return entity;
    }

    async getListAsync(props: any): Promise<BaseEntity[]> {
        const getList = await this.repo.getListAsync(props)
        // Todo: Merge list data with missing objects
        for (const item of getList)
            if (!(item.getId() in this._cache))
                this._cache[item.getId()] = item;
        this.emit(event.GetList);
        return getList;
    }

    async addAsync(entity: BaseEntity): Promise<BaseEntity> {
        const added = await this.repo.addAsync(entity)
        // Todo: If not added then null or whatever.
        this._cache[added.getId()] = added;

        this.emit(event.Add);
        return added;
    }

    async updateAsync(entity: BaseEntity): Promise<BaseEntity> {
        const update = await this.repo.updateAsync(entity)
        // Todo: If not updated then null or whatever.
        this._cache[update.getId()] = update;
        this.emit(event.Update);
        return update;
    }

    async deleteAsync(id: number): Promise<object> {
        const res = await this.repo.deleteAsync(id);
        // Todo: If not happened then dont remove.
        delete this._cache[id];
        this.emit(event.Delete);
        return res;
    }
}

export default CacheRepository;
export const Event = event;