import IPerson from "../interfaces/IPerson";
import FamilyMember from "../entities/famtree/FamilyMember";
import IMemberMap from "../interfaces/IMemberMap";
import PersonParent from "../interfaces/PersonParent";

class FamilyBuilder {

    personParents: PersonParent[];
    people: IPerson[];

    constructor(personParents: PersonParent[], people: IPerson[]) {
        this.personParents = personParents;
        this.people = people;
    }

    build(): IMemberMap {
        const members: IMemberMap = {}

        for (const person of this.people) {
            const id = person.getId()
            if (!(id in members))
                members[id] = new FamilyMember(person)
        }
        for (const personParent of this.personParents) {
            const { personId, parentId } = personParent;

            const child = members[personId];
            const parent = members[parentId];

            child.parents.push(parent);
            parent.children.push(child);

            for (const sibling of parent.children) {
                if (sibling !== child && !sibling.siblings.includes(child)) {
                    sibling.siblings.push(child);
                    child.siblings.push(sibling);
                }
            }

            if (child.parents.length === 2) {
                const parent1 = child.parents[0]
                const parent2 = child.parents[1]
                if (!parent1.spouses.includes(parent2)) {
                    parent1.spouses.push(parent2);
                    parent2.spouses.push(parent1);
                }
            }
        }

        return members
    }
}

export default FamilyBuilder;