import ParentMap from "../interfaces/ParentMap";
import IPerson from "../interfaces/IPerson";
import FamilyMember from "../entities/famtree/FamilyMember";
import IMemberMap from "../interfaces/IMemberMap";


class FamilyBuilder {

    parentMap: {[id:number]: number[]};
    people: { [id:number]: IPerson };

    constructor(parentMap: ParentMap, people: { [id:number]: IPerson }) {
        this.parentMap = parentMap;
        this.people = people;
    }

    build(): IMemberMap {
        const members: IMemberMap = {}

        for (const person of Object.values(this.people)) {
            const id = person.getId()
            if (!(id in members))
                members[id] = new FamilyMember(person)

            if (person.getId() in this.parentMap) {
                const child = members[id]
                const parents = this.parentMap[id]
                const n = this.parentMap[id].length

                for (let i = 0; i < n; i++) {
                    const keyP = parents[i];
                    this.addToMap(keyP, members);

                    for (const member of members[keyP].children) {
                        member.siblings.push(child)
                        child.siblings.push(member)
                    }

                    child.parents.push(members[keyP])
                    members[keyP].children.push(child)

                    if (n === 2 && i === 1) {
                        members[parents[0]].spouses.push(members[parents[1]])
                        members[parents[1]].spouses.push(members[parents[0]])
                    }
                }
            }
        }
        return members
    }

    addToMap(key:number, members:IMemberMap) {
        if (!(key in members))
            members[key] = new FamilyMember(this.people[key])
    }
}

export default FamilyBuilder;