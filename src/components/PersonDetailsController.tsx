import {useState} from "react";
import PersonDetails from "./pages/PersonDetails";
import PersonEdit from "./pages/PersonEdit";
import IPerson from "../app/interfaces/IPerson";
import IPersonManager from "../app/interfaces/IPersonManager";

type Props = {
    person: IPerson,
    onViewChange: Function,
    onBack: Function,
    personManager: IPersonManager
};

export default ({person, onViewChange, onBack, personManager}: Props) => {
    const [edit, setEdit] = useState(false)

    const handleEdit = () => setEdit(true);
    const handleCancelEdit = () => setEdit(false);

    return (
        <>
            {!edit && <PersonDetails onBack={onBack} person={person} onEdit={handleEdit} onViewChange={onViewChange}/>}
            {edit && <PersonEdit personManager={personManager} person={person} onCancelEdit={handleCancelEdit}/>}
        </>
    );
}