import IPerson from "./IPerson";

interface IFamilyMember {
    Person: IPerson

    children: IFamilyMember[]
    parents: IFamilyMember[]
    spouses: IFamilyMember[]
    siblings: IFamilyMember[]
}

export default IFamilyMember;