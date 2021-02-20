import FamTree from "../../entities/famtree/FamTree";
import BaseRepository from "./BaseRepository";


class TreeRepository extends BaseRepository {

    async addAsync(entity: FamTree): Promise<FamTree> {
        const response = await fetch(this.endpoint.add, {
            body : JSON.stringify({ "name": entity.getName() }),
            method : "post",
            headers : {
                "context-header": "text/json"
            }
        })
        console.log(JSON.stringify({ "name": entity.getName() }))
        console.log(response)
        const data = await response.json();
        console.log(data)
        return new FamTree(data.tree.id, data.tree.name);
    }

    async deleteAsync(id: number): Promise<object> {
        return {};
    }

    async getByIdAsync(id: number): Promise<FamTree | null> {
        return new FamTree(id, 'Murakas');
    }

    async getListAsync(): Promise<FamTree[]> {
        const response = await fetch(this.endpoint.getList)
        const data = await response.json();

        return data.trees.map((t:any) => new FamTree(t.id, t.name));
    }

    async updateAsync(entity: FamTree): Promise<FamTree> {
        return entity;
    }
}

export default TreeRepository;