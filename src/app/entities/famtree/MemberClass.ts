import IPerson from "../../interfaces/IPerson";
import Class from "./Class";

const definitions: any = {}

definitions[Class.PARENT] = ['dad', 'mom']
definitions[Class.CHILD] = ['son', "daughter"]
definitions[Class.SIBLING] = ["brother", "sister"]
definitions[Class.PIBLING] = ["uncle", 'aunt']
definitions[Class.GRANDPARENTS] = ['granny', 'grandpa']

const MemberClass = (person: IPerson, famClass: Class) => {
    return definitions[famClass][person.getSex()]
}

export default MemberClass;