import React from 'react';
import Container from "react-bootstrap/Container";
import PersonDetailsCard from "./personDetails/PersonDetailsCard";
import PersonSpouse from "./personDetails/PersonSpouse";
import GroupTitle from "./personDetails/GroupTitle";
import PersonRelativeCard from "./personDetails/PersonRelativeCard";
import {FamilyClass} from "../../app/constants";
import IFamilyMember from "../../app/interfaces/IFamilyMember";
import PersonBreadcrumb from "./common/PersonBreadcrumb";
import IPerson from "../../app/interfaces/IPerson";

type Props = {
    onEdit: Function,
    familyMember: IFamilyMember,
    breadcrumb: IPerson[],
};

export default ({onEdit, familyMember, breadcrumb}: Props) => {

    const spouses = familyMember.spouses;
    const kids = familyMember.children;
    const parents = familyMember.parents;

    return (
        <Container>
            <PersonBreadcrumb familyMember={familyMember} breadcrumb={breadcrumb} />

            <PersonDetailsCard person={familyMember.Person} onEdit={onEdit}/>

            { spouses.length > 0 && <GroupTitle title={'Spouse' + (spouses.length > 1? 's':'')}/>}
            { spouses.map(s => <PersonSpouse key={s.Person.getId()} person={s.Person}/>) }

            { kids.length > 0 && <GroupTitle title={'Kid' + (spouses.length > 1? 's':'')}/>}
            { kids.map(s => <PersonRelativeCard key={s.Person.getId()} person={s.Person} familyClass={FamilyClass.CHILD}/>) }

            <GroupTitle title='Relatives' />
            { parents.map(s => <PersonRelativeCard key={s.Person.getId()} person={s.Person} familyClass={FamilyClass.PARENT}/>) }

        </Container>
    );
}