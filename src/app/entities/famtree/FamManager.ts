import FamTree from "./FamTree";
import Person from "../person/Person";

class FamManager {

    famTree: FamTree;

    treeChildren: { [id:number]: number[] };
    treeParents: { [id:number]: number[] };

    constructor(famTree: FamTree) {
        this.famTree = famTree;

        this.treeChildren = {}
        this.treeParents = {}
    }

    addParent(kid: number, parent: number): void {
        this.addToDictList(this.treeParents, kid, parent)
        this.addToDictList(this.treeChildren, parent, kid)
    }

    addToDictList(dict: any, key: number, value: number) {
        if (key in dict) {
            const l = (dict[key]) as Array<number>;
            if (!l.includes(value))
                l.push(value)
        }
        else
            dict[key] = [value]
    }

    getChildren(id: number): Person[] {
        if (id in this.treeChildren)
            return this.treeChildren[id].map(id => this.famTree.getPeople()[id]);
        return []
    }

    getParents(id: number): Person[] {
        if (id in this.treeParents)
            return this.treeParents[id].map(id => this.famTree.getPeople()[id]);
        return []
    }

}

export default FamManager;