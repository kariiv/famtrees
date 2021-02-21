import IPerson from "./IPerson";

interface IParentService {

    getChildren(person: IPerson): IPerson[];

    getYoungestChild(person: IPerson): IPerson;

    getOldestChild(person: IPerson): IPerson;

}

export default IParentService;