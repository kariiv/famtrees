import Person from "./Person";

class Sibling extends Person {

    getBrothers(): Person[] {
        return []
    }

    getSisters(): Person[] {
        return []
    }

    getYoungestSibling(): Person {
        return Person.Dummy;
    }
}

export default Sibling;