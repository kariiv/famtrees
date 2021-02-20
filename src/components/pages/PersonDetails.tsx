import Container from "react-bootstrap/Container";
import PersonDetailsCard from "./personDetails/PersonDetailsCard";
// import PersonSpouse from "./personDetails/PersonSpouse";
// import GroupTitle from "./personDetails/GroupTitle";
// import PersonRelativeCard from "./personDetails/PersonRelativeCard";
import IPerson from "../../app/interfaces/IPerson";
import IRepository from "../../app/services/repository/IRepository";

type Props = {
    person: IPerson,
    onEdit: Function,
    onViewChange: Function,
    personRepository: IRepository,
};

export default ({person, onEdit, onViewChange}: Props) => {
    return (
        <Container>
            <PersonDetailsCard person={person} onEdit={onEdit} onViewChange={onViewChange}/>

            {/*<GroupTitle title='Spouse(s)'/>*/}
            {/*<PersonSpouse first='Merike' last='Muusik' />*/}
            {/*<PersonSpouse first='Mirjam' last='Tallegg' dead/>*/}

            {/*<GroupTitle title='Kids'/>*/}
            {/*<PersonRelativeCard first='Mari' last='Milling' tag='Daughter'/>*/}
            {/*<PersonRelativeCard first='Matu' last='Milling' tag='Son'/>*/}

            {/*<GroupTitle title='Relatives' />*/}
            {/*<PersonRelativeCard first='Merilin' last='Mihkli' tag='Mom'/>*/}
            {/*<PersonRelativeCard first='Artur' last='Mihkli' tag='Dad' dead/>*/}

        </Container>
    );
}