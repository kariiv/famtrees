import IPerson from "./IPerson";

interface IFamTree {

    getId(): number;

    getName(): string;

    getPeople(): IPerson[];

    getPeopleMap(): {[id:number]: IPerson};

}
export default IFamTree;