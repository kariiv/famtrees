import React from 'react';
import IFamTree from "../app/interfaces/IFamTree";

type Context = {
    trees: IFamTree[],
    selectedTree: IFamTree | null,
    loading: boolean,

    reloadTrees: Function,
    createTree: Function,
    deleteTree: Function,

    selectTree: Function,
    deSelectTree: Function,
}

const defaultValue: Context = {
    trees: [],
    selectedTree: null,
    loading: true,

    reloadTrees: () => {},
    createTree: () => {},
    deleteTree: () => {},
    selectTree: () => {},
    deSelectTree: () => {},
}

export default React.createContext(defaultValue)