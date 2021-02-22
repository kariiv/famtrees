import IPerson from "../interfaces/IPerson";
import Person from "../entities/person/Person";
import Swal from 'sweetalert2';

// const backend = 'https://localhost:44330';
const backend = '';



export const Create = async (person: IPerson): Promise<IPerson|null> => {
    const body = {
        firstName: person.getFirstName(),
        lastName: person.getLastName(),
        birthday: person.getBirthday(),
        sex: person.getSex(),
        treeId: person.getTreeId()
    }
    if (person.getDeathDate()) {
        // @ts-ignore
        body.deathDate = person.getDeathDate()
    }

    const response = await fetch(backend + "/api/people", {
        body : JSON.stringify(body),
        method : "post",
        headers : {
            'accept': 'text/json',
            "Content-Type": "application/json"
        }
    })
    try {
        const data = await response.json();
        if (data.person) {
            const {id, firstName, lastName, birthday, deathDate, treeId, sex} = data.person;
            return new Person(id, firstName, lastName, sex, treeId, birthday, deathDate);
        }
    } catch (e) {}
    Swal.fire({
        title: "Invalid inputs!\nPlease try again.",
        icon: "error",
        timer: 2500,
        showCancelButton: false,
        showConfirmButton: false
    })

    return null;
}

export const Delete = async (person: IPerson): Promise<boolean> => {
    const response = await fetch(backend + "/api/people/" + person.getId(), {
        method : "delete"
    })
    const data = await response.json();
    return data.status === "Deleted";
}

export const Update = async (person: IPerson): Promise<IPerson|null> => {
    const body = {
        id: person.getId(),
        firstName: person.getFirstName(),
        lastName: person.getLastName(),
        birthday: person.getBirthday(),
        deathDate: person.getDeathDate(),
        treeId: person.getTreeId()
    }


    const response = await fetch(backend + "/api/people", {
        body : JSON.stringify(body),
        method : "put",
        headers : {
            'accept': 'text/json',
            "Content-Type": "application/json"
        }
    })

    try {
        const data = await response.json();
        if (data.person) {
            const {id, firstName, lastName, birthday, deathDate, treeId, sex} = data.person;
            return new Person(id, firstName, lastName, sex, treeId, birthday, deathDate);
        }
    } catch (e) {}
    Swal.fire({
        title: "Invalid inputs!\nPlease try again.",
        icon: "error",
        timer: 2500,
        showCancelButton: false,
        showConfirmButton: false
    })

    return null;
}

export const List = async (treeId: number): Promise<IPerson[]> => {
    const response = await fetch(backend + "/api/tree-people/" + treeId)
    const data = await response.json();

    return data.people.map((p:any) => {
        const {id, firstName, lastName, birthday, deathDate, treeId, sex} = p;
        return new Person(id, firstName, lastName, sex, treeId, birthday, deathDate);
    });
}