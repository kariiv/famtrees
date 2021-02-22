import IPerson from "../interfaces/IPerson";

interface IParentService {

    getChildren(person: IPerson): IPerson[];

    getYoungestChild(person: IPerson): IPerson|null;

    getOldestChild(person: IPerson): IPerson|null;

}

export default IParentService;