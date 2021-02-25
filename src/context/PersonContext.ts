import React from 'react';
import IPerson from "../app/interfaces/IPerson";
import IFamilyMember from "../app/interfaces/IFamilyMember";

type Context = {
    people: IPerson[],
    familyMembers: { [id:number]:IFamilyMember },
    loading: boolean,

    reloadPeople: Function,
    createPerson: Function,
    editPerson: Function,
    deletePerson: Function,
}

const defaultValue: Context = {
    people: [],
    loading: true,
    familyMembers: {},

    reloadPeople: () => {},
    createPerson: () => {},
    editPerson: () => {},
    deletePerson: () => {},
}

export default React.createContext(defaultValue)