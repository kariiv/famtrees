import IPerson from "../interfaces/IPerson";

interface ISiblingService {

    getBrothers(person: IPerson): IPerson[];

    getSisters(person: IPerson): IPerson[];

    getYoungestSibling(person: IPerson): IPerson;
}

export default ISiblingService;