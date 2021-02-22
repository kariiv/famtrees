import IPerson from "../interfaces/IPerson";

interface ISpouseService {

    getSpouses(person: IPerson): IPerson[];

}

export default ISpouseService;