import BaseConnection from "../providers/BaseConnection";
import IRepository from "./IRepository";
import FamTree from "../../entities/famtree/FamTree";

class TreeRepository implements IRepository {

    connection: BaseConnection;

    constructor(connection: BaseConnection) {
        this.connection = connection
    }

    add(entity: FamTree): FamTree {
        return new FamTree(1, entity.getName());
    }

    delete(id: number): object {
        return {};
    }

    getById(id: number): FamTree | null {
        return new FamTree(id, 'Murakas');
    }

    getList(): FamTree[] {
        return [new FamTree(1, 'Vaarikad'), new FamTree(2, 'Laam'), new FamTree(3, 'Jedi'), new FamTree(4, 'Satikas')];
    }

    update(entity: FamTree): FamTree {
        return entity;
    }
}

export default TreeRepository;