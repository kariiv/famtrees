import Container from "react-bootstrap/Container";
import PersonDetailsCard from "./personDetails/PersonDetailsCard";
import PersonSpouse from "./personDetails/PersonSpouse";
import GroupTitle from "./personDetails/GroupTitle";
import PersonRelativeCard from "./personDetails/PersonRelativeCard";
import IPerson from "../../app/interfaces/IPerson";
import IMemberMap from "../../app/interfaces/IMemberMap";
import IParentManager from "../../app/interfaces/IParentManager";

type Props = {
    person: IPerson,
    onEdit: Function,
    onBack: Function,
    onViewChange: Function,
    familyMembers: IMemberMap,
    parentManager: IParentManager
};

export default ({person, onEdit, onViewChange, onBack, familyMembers}: Props) => {

    const spouses = familyMembers[person.getId()].spouses;
    const kids = familyMembers[person.getId()].children;
    const parents = familyMembers[person.getId()].parents;

    return (
        <Container>
            <PersonDetailsCard onBack={onBack} person={person} onEdit={onEdit} onViewChange={onViewChange}/>

            { spouses.length > 0 && <GroupTitle title={'Spouse' + (spouses.length > 1? 's':'')}/>}
            { spouses.map(s => <PersonSpouse key={s.Person.getId()} person={s.Person}/>) }

            { kids.length > 0 && <GroupTitle title={'Kid' + (spouses.length > 1? 's':'')}/>}
            { kids.map(s => <PersonRelativeCard key={s.Person.getId()} person={s.Person} tag='Daughter'/>) }

            <GroupTitle title='Relatives' />
            { parents.map(s => <PersonRelativeCard key={s.Person.getId()} person={s.Person} tag='Mom'/>) }

        </Container>
    );
}