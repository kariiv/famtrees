import IPerson from "../interfaces/IPerson";
import IFamTree from "../interfaces/IFamTree";
import IPersonParent from "../interfaces/PersonParent";
import { backend } from './config';

export const Create = async (person: IPerson, parent: IPerson) => {
    const body = {
        personId: person.getId(),
        parentId: parent.getId(),
    }
    const response = await fetch(backend + "/api/person-parents", {
        body : JSON.stringify(body),
        method : "post",
        headers : {
            'accept': 'text/json',
            "Content-Type": "application/json"
        }
    })

    const data = await response.json();
    return data.status === "Added";
}

export const Delete = async (person: IPerson, parent: IPerson): Promise<boolean> => {
    const body = {
        personId: person.getId(),
        parentId: parent.getId(),
    }
    const response = await fetch(backend + "/api/person-parent", {
        body : JSON.stringify(body),
        method : "delete",
        headers : {
            'accept': 'text/json',
            "Content-Type": "application/json"
        }
    })
    const data = await response.json();
    return data.status === "Removed";
}

export const ListPersonParents = async (person: IPerson): Promise<number[]> => {
    const response = await fetch(backend + "/api/person-parent/" + person.getId(), {
        method : "get"
    })
    try {
        const data = await response.json();
        if (data.parents)
            return data.parents
    } catch (e) {
        console.log('Person not found!')
    }
    return []
}

export const ListTreeParents = async (tree: IFamTree): Promise<IPersonParent[]> => {
    const response = await fetch(backend + "/api/tree-parents/" + tree.getId(), {
        method : "get"
    })
    try {
        const data = await response.json();
        if (data.personParents)
            return data.personParents
    } catch (e) {
        console.log('Person not found!')
    }
    return []
}
