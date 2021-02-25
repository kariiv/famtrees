import IFamTree from "../interfaces/IFamTree";
import FamTree from "../entities/famtree/FamTree";
import { backend } from './config';

export const Create = async (tree: IFamTree) => {
    const response = await fetch(backend + "/api/trees", {
        body : JSON.stringify({ name: tree.getName() }),
        method : "post",
        headers : {
            'accept': 'text/json',
            "Content-Type": "application/json"
        }
    })
    const data = await response.json();
    return new FamTree(data.tree.id, data.tree.name)
}

export const Delete = async (tree: IFamTree): Promise<boolean> => {
    const response = await fetch(backend + "/api/trees/" + tree.getId(), {
        method : "delete"
    })
    const data = await response.json();
    return data.status === "Deleted";
}

export const Update = async (tree: IFamTree) => {
    const response = await fetch(backend + "/api/trees", {
        body : JSON.stringify({ id: tree.getId(), name: tree.getName() }),
        method : "post",
        headers : {
            'accept': 'text/json',
            "Content-Type": "application/json"
        }
    })
    const data = await response.json();
    return new FamTree(data.tree.id, data.tree.name)
}

export const List = async (): Promise<IFamTree[]> => {
    const response = await fetch(backend + "/api/trees")
    const data = await response.json();
    return data.trees.map((t:any) => new FamTree(t.id, t.name));
}