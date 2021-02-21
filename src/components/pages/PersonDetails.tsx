import Container from "react-bootstrap/Container";
import PersonDetailsCard from "./personDetails/PersonDetailsCard";
import PersonSpouse from "./personDetails/PersonSpouse";
import GroupTitle from "./personDetails/GroupTitle";
import PersonRelativeCard from "./personDetails/PersonRelativeCard";
import IPerson from "../../app/interfaces/IPerson";

type Props = {
    person: IPerson,
    onEdit: Function,
    onBack: Function,
    onViewChange: Function,
};

export default ({person, onEdit, onViewChange, onBack}: Props) => {
    return (
        <Container>
            <PersonDetailsCard onBack={onBack} person={person} onEdit={onEdit} onViewChange={onViewChange}/>

            <GroupTitle title='Spouse(s)'/>
            <PersonSpouse person={person} />
            <PersonSpouse person={person}/>

            <GroupTitle title='Kids'/>
            <PersonRelativeCard person={person} tag='Daughter'/>
            <PersonRelativeCard person={person} tag='Son'/>

            <GroupTitle title='Relatives' />
            <PersonRelativeCard person={person} tag='Mom'/>
            <PersonRelativeCard person={person} tag='Dad'/>

        </Container>
    );
}