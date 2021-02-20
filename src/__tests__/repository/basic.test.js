import CacheRepository from "../../app/services/repository/CacheRepository";
import PersonRepository from "../../app/services/repository/PersonRepository";
import Person from "../../app/entities/person/Person";
import ConnectionConfiguration from "../../app/services/providers/ConnectionConfiguration";
import TreeRepository from "../../app/services/repository/TreeRepository";
import FamTree from "../../app/entities/famtree/FamTree";

const connection = new ConnectionConfiguration('', '', '/api/');

it('Person Cached Repository Test 1', () => {

    const cacheRepo = new CacheRepository(new PersonRepository(connection))

    const person1Data = new Person(5642, "Mille", "Mihkelson")
    const person1 = cacheRepo.add(person1Data)


    expect(person1Data.getFirstName()).toEqual(person1.getFirstName());
    expect(person1Data.getLastName()).toEqual(person1.getLastName());
    expect(person1Data.getId() === person1.getId()).toBeFalsy();

    const person2 = cacheRepo.getById(person1.getId());

    expect(person1.getId()).toEqual(person2.getId())
    expect(person1.getLastName()).toEqual(person2.getLastName())
    expect(person1.getFirstName()).toEqual(person2.getFirstName())
});

it('Tree Cached Repository Test 1', () => {

    const cacheRepo = new CacheRepository(new TreeRepository(connection))

    const treeData1 = new FamTree(5642, "Mihkli")
    const tree1 = cacheRepo.add(treeData1)

    expect(treeData1.getName()).toEqual(tree1.getName());
    expect(treeData1.getId() === tree1.getId()).toBeFalsy();

    const tree2 = cacheRepo.getById(tree1.getId());

    expect(tree1.getId()).toEqual(tree2.getId())
    expect(tree1.getName()).toEqual(tree2.getName())
});