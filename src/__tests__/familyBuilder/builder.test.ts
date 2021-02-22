import FamilyBuilder from "../../app/services/FamilyBuilder";
import Person from "../../app/entities/person/Person";
import IParentMap from '../../app/interfaces/IParentMap'
import IPerson from '../../app/interfaces/IPerson'
import Sex from "../../app/entities/person/Sex";

const people = [
    new Person(1,'A', "B", Sex.MALE, 0, '', ''),
    new Person(2,'A', "B", Sex.MALE, 0, '', ''),
    new Person(3,'A', "B", Sex.MALE, 0, '', ''),
    new Person(4,'A', "B", Sex.MALE, 0, '', ''),
    new Person(5,'A', "B", Sex.MALE, 0, '', ''),
    new Person(6,'A', "B", Sex.MALE, 0, '', ''),
    new Person(7,'A', "B", Sex.MALE, 0, '', ''),
    new Person(8,'A', "B", Sex.MALE, 0, '', ''),
    new Person(9,'A', "B", Sex.MALE, 0, '', ''),
    new Person(10,'A', "B", Sex.MALE, 0, '', ''),
    new Person(11,'A', "B", Sex.MALE, 0, '', ''),
    new Person(12,'A', "B", Sex.MALE, 0, '', ''),
    new Person(13,'A', "B", Sex.MALE, 0, '', ''),
]

const mapper = (): {[id:number]: IPerson} => {
    const data:{[id:number]: IPerson} = {}

    for (const person of people)
        data[person.getId()] = person;
    return data;
}

const mapped = mapper();

it('Builder basics ', () => {

    const map: IParentMap = {
        1: [3, 4],
        3: [2, 5]
    }

    const builder = new FamilyBuilder(map, mapped)
    const members = builder.build()
    expect(Object.values(members).length).toEqual(13);
    expect(members[1].Person.getId()).toEqual(1);
    expect(members[2].spouses.length).toEqual(1);
});


it('Builder zigzag', () => {

    const map: IParentMap = {
        4: [1, 2],
        5: [2, 3],
        6: [3, 7],
        8: [7]
    }

    const builder = new FamilyBuilder(map, mapped)

    const members = builder.build()

    expect(Object.values(members).length).toEqual(13);
    expect(members[5].siblings.length).toEqual(2);
    expect(members[5].parents.length).toEqual(2);
    expect(members[5].spouses.length).toEqual(0);
    expect(members[5].children.length).toEqual(0);

    expect(members[8].siblings.length).toEqual(1);
    expect(members[8].parents.length).toEqual(1);
    expect(members[8].spouses.length).toEqual(0);
    expect(members[8].children.length).toEqual(0);

    expect(members[4].siblings.length).toEqual(1);
    expect(members[4].parents.length).toEqual(2);
    expect(members[4].spouses.length).toEqual(0);
    expect(members[4].children.length).toEqual(0);

    expect(members[1].siblings.length).toEqual(0);
    expect(members[1].parents.length).toEqual(0);
    expect(members[1].spouses.length).toEqual(1);
    expect(members[1].children.length).toEqual(1);

    expect(members[3].siblings.length).toEqual(0);
    expect(members[3].parents.length).toEqual(0);
    expect(members[3].spouses.length).toEqual(2);
    expect(members[3].children.length).toEqual(2);

    expect(members[7].siblings.length).toEqual(0);
    expect(members[7].parents.length).toEqual(0);
    expect(members[7].spouses.length).toEqual(1);
    expect(members[7].children.length).toEqual(2);
});

it('Builder ugly situation', () => {

    const map: IParentMap = {
        1: [2, 4],
        2: [3, 5],
        4: [3],
        5: [6],
        7: [5],
        8: [7],
        10: [7],
        9: [7]
    }

    const builder = new FamilyBuilder(map, mapped)
    const members = builder.build()

    expect(Object.values(members).length).toEqual(13);
    expect(members[7].siblings.length).toEqual(1);
    expect(members[7].parents.length).toEqual(1);
    expect(members[7].spouses.length).toEqual(0);
    expect(members[7].children.length).toEqual(3);

    expect(members[8].siblings.length).toEqual(2);
    expect(members[8].parents.length).toEqual(1);
    expect(members[8].spouses.length).toEqual(0);
    expect(members[8].children.length).toEqual(0);

    expect(members[3].siblings.length).toEqual(0);
    expect(members[3].parents.length).toEqual(0);
    expect(members[3].spouses.length).toEqual(1);
    expect(members[3].children.length).toEqual(2);

    expect(members[4].siblings.length).toEqual(1);
    expect(members[4].parents.length).toEqual(1);
    expect(members[4].spouses.length).toEqual(1);
    expect(members[4].children.length).toEqual(1);

    expect(members[1].siblings.length).toEqual(0);
    expect(members[1].parents.length).toEqual(2);
    expect(members[1].spouses.length).toEqual(0);
    expect(members[1].children.length).toEqual(0);

    expect(members[6].siblings.length).toEqual(0);
    expect(members[6].parents.length).toEqual(0);
    expect(members[6].spouses.length).toEqual(0);
    expect(members[6].children.length).toEqual(1);
});