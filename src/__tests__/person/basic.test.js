import Person from "../../app/entities/person/Person";

it('Person Test 1', () => {

    const person1 = new Person(1, "Mihkel", "Mihkelson")
    const person2 = new Person(2, "Mille", "Mihkelson")
    const person3 = new Person(3, "Mikk", "Meelis")

    expect("Mihkel").toEqual(person1.getFirstName());
    expect("Mihkelson").toEqual(person1.getLastName());
    expect(1).toEqual(person1.getId());

    expect("Mille").toEqual(person2.getFirstName());
    expect("Mihkelson").toEqual(person2.getLastName());
    expect(2).toEqual(person2.getId());

    expect("Mikk").toEqual(person3.getFirstName());
    expect("Meelis").toEqual(person3.getLastName());
    expect(3).toEqual(person3.getId());
});

it('Person Test Dummy', () => {
    const dummy = Person.Dummy;

    expect("Dummy").toEqual(dummy.getFirstName());
    expect("Person").toEqual(dummy.getLastName());
    expect(0).toEqual(dummy.getId());
});