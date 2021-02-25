import React from 'react';
import PersonParent from "../app/interfaces/PersonParent";

type Context = {
    parents: PersonParent[],
    addParent: Function,
    removeParent: Function,
    reloadParents: Function
}

const defaultValue: Context = {
    parents: [],
    addParent: () => {},
    removeParent: () => {},
    reloadParents: () => {}
}

export default React.createContext(defaultValue)