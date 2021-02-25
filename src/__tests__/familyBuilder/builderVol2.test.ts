import FamilyBuilder from "../../app/services/FamilyBuilderVol2";
import Person from "../../app/entities/person/Person";
import { Sex } from "../../app/constants";
import PersonParent from "../../app/interfaces/PersonParent";

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

// it('Builder basics ', () => {
//
//     const map: PersonParent[] = [
//         {personId: 1, parentId: 3},
//         {personId: 1, parentId: 4},
//         {personId: 3, parentId: 2},
//         {personId: 3, parentId: 5},
//     ]
//
//     const builder = new FamilyBuilder(map, people)
//     const members = builder.build()
//     expect(Object.values(members).length).toEqual(13);
//     expect(members[1].Person.getId()).toEqual(1);
//     expect(members[2].spouses.length).toEqual(1);
// });


it('Builder zigzag', () => {

    const map: PersonParent[] = [
        {personId: 4, parentId: 1},
        {personId: 4, parentId: 2},
        {personId: 5, parentId: 2},
        {personId: 5, parentId: 3},
        {personId: 6, parentId: 3},
        {personId: 6, parentId: 7},
        {personId: 8, parentId: 7},
    ]

    const builder = new FamilyBuilder(map, people)

    const members = builder.build()

    expect(Object.values(members).length).toEqual(13);

    expect(members[5].parents.length).toEqual(2);
    expect(members[8].parents.length).toEqual(1);
    expect(members[4].parents.length).toEqual(2);
    expect(members[1].parents.length).toEqual(0);
    expect(members[3].parents.length).toEqual(0);
    expect(members[7].parents.length).toEqual(0);

    expect(members[5].children.length).toEqual(0);
    expect(members[7].children.length).toEqual(2);
    expect(members[8].children.length).toEqual(0);
    expect(members[4].children.length).toEqual(0);
    expect(members[1].children.length).toEqual(1);
    expect(members[3].children.length).toEqual(2);

    expect(members[8].spouses.length).toEqual(0);
    expect(members[5].spouses.length).toEqual(0);
    expect(members[1].spouses.length).toEqual(1);
    expect(members[4].spouses.length).toEqual(0);
    expect(members[3].spouses.length).toEqual(2);
    expect(members[7].spouses.length).toEqual(1);

    expect(members[5].siblings.length).toEqual(2);
    expect(members[4].siblings.length).toEqual(1);
    expect(members[8].siblings.length).toEqual(1);
    expect(members[1].siblings.length).toEqual(0);
    expect(members[3].siblings.length).toEqual(0);
    expect(members[7].siblings.length).toEqual(0);
});

it('Builder ugly situation', () => {

    const map: PersonParent[] = [
        {personId: 1, parentId: 2},
        {personId: 1, parentId: 4},
        {personId: 2, parentId: 3},
        {personId: 2, parentId: 5},
        {personId: 4, parentId: 3},
        {personId: 5, parentId: 6},
        {personId: 7, parentId: 5},
        {personId: 8, parentId: 7},
        {personId: 10, parentId: 7},
        {personId: 9, parentId: 7},
    ]

    const builder = new FamilyBuilder(map, people)
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