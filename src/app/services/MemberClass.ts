import IPerson from "../interfaces/IPerson";
import { FamilyClass } from "../constants";

const definitions: any = {}

definitions[FamilyClass.PARENT] = ['dad', 'mom']
definitions[FamilyClass.CHILD] = ['son', "daughter"]
definitions[FamilyClass.SIBLING] = ["brother", "sister"]
definitions[FamilyClass.STEPSIBLING] = ["stepbrother", 'stepsister']
definitions[FamilyClass.PIBLING] = ["uncle", 'aunt']
definitions[FamilyClass.GRANDPARENTS] = ['granny', 'grandpa']

const MemberClass = (person: IPerson, famClass: FamilyClass) => {
    return definitions[famClass][person.getSex()]
}

export default MemberClass;