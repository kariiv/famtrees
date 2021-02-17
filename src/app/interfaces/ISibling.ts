import Person from "../entities/person/Person";

interface Sibling {

    getBrothers(): Person[];

    getSisters(): Person[];

    getYoungestSibling(): Person;
}

export default Sibling;