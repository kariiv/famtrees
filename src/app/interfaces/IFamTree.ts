import Person from "../entities/person/Person";

interface IFamTree {

    getId(): number;

    getName(): string;

    getPeople(): Person[];

    getPeopleMap(): {[id:number]: Person};

}
export default IFamTree;