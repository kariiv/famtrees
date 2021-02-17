import Person from "../entities/person/Person";

interface IFamTree {

    getName(): string;

    getPeople(): Person[];

    getPeopleCount(): number;

}
export default IFamTree;