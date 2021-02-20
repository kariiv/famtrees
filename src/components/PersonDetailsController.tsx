import {useState} from "react";
import PersonDetails from "./pages/PersonDetails";
import PersonEdit from "./pages/PersonEdit";
import IPerson from "../app/interfaces/IPerson";
import IRepository from "../app/services/repository/IRepository";

type Props = {
    person: IPerson,
    personRepository: IRepository,
    onViewChange: Function
};

export default ({person, personRepository, onViewChange}: Props) => {
    const [edit, setEdit] = useState(false)

    const handleEdit = () => setEdit(true)
    const handleCancelEdit = () => setEdit(true)

    return (
        <>
            {!edit && <PersonDetails personRepository={personRepository} person={person} onEdit={handleEdit} onViewChange={onViewChange}/>}
            {edit && <PersonEdit personRepository={personRepository} person={person} onCancelEdit={handleCancelEdit}/>}
        </>
    );
}