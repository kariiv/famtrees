import IFamilyMember from "../../interfaces/IFamilyMember";
import IPerson from "../../interfaces/IPerson";

class FamilyMember implements IFamilyMember {

    Person: IPerson;

    constructor(person: IPerson) {
        this.Person = person

        this.children = []
        this.parents = []
        this.siblings = []
        this.spouses = []
    }

    children: IFamilyMember[];
    parents: IFamilyMember[];
    siblings: IFamilyMember[];
    spouses: IFamilyMember[];
}
export default FamilyMember;