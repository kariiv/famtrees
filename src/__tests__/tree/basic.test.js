import FamTree from "../../app/entities/famtree/FamTree";

it('Tree Basic Test 1', () => {

    const tree1 = new FamTree(1, "Mihklid")
    const tree2 = new FamTree(2, "Vaarikad")
    const tree3 = new FamTree(3, "Maasikad")

    expect("Mihklid").toEqual(tree1.getName());
    expect(1).toEqual(tree1.getId());

    expect("Vaarikad").toEqual(tree2.getName());
    expect(2).toEqual(tree2.getId());

    expect("Maasikad").toEqual(tree3.getName());
    expect(3).toEqual(tree3.getId());
});