import Person from "../entities/person/Person";

interface IFamTree {

    getId(): number;

    getName(): string;

    getPeople(): Person[];

    getPeopleCount(): number;

}
export default IFamTree;