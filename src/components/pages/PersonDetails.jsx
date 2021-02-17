import Container from "react-bootstrap/Container";
import PersonDetailsCard from "./personDetails/PersonDetailsCard";
import PersonSpouse from "./personDetails/PersonSpouse";
import GroupTitle from "./personDetails/GroupTitle";
import PersonRelativeCard from "./personDetails/PersonRelativeCard";


export default ({person, onEdit}) => {
    return (
        <Container>
            <PersonDetailsCard person={person}/>

            <GroupTitle title='Spouse(s)'/>
            <PersonSpouse first='Merike' last='Muusik' />
            <PersonSpouse first='Mirjam' last='Tallegg' dead/>

            <GroupTitle title='Kids'/>
            <PersonRelativeCard first='Mari' last='Milling' tag='Daughter'/>
            <PersonRelativeCard first='Matu' last='Milling' tag='Son'/>

            <GroupTitle title='Relatives' />
            <PersonRelativeCard first='Merilin' last='Mihkli' tag='Mom'/>
            <PersonRelativeCard first='Artur' last='Mihkli' tag='Dad' dead/>

        </Container>
    );
}