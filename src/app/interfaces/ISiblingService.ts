import IPerson from "../entities/person/Person";

interface ISiblingService {

    getBrothers(person: IPerson): IPerson[];

    getSisters(person: IPerson): IPerson[];

    getYoungestSibling(person: IPerson): IPerson;
}

export default ISiblingService;