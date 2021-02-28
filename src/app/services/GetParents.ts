import IFamilyMember from "../interfaces/IFamilyMember";
import {Sex} from "../constants";
import Parents from "../interfaces/Parents";


export default (familyMember:IFamilyMember): Parents => {
    let parents: Parents = { mom: null, dad: null }

    const _parents = familyMember.parents
    for (const parent of _parents) {
        if (parent.Person.getSex() === Sex.MALE) parents.dad = parent;
        else parents.mom = parent
    }
    return parents;
}