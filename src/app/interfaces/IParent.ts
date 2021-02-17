import Person from "../entities/person/Person";

interface IParent {

    getChildren(): Person[];

    getYoungestChild(): Person;

    getOldestChild(): Person;

}

export default IParent;