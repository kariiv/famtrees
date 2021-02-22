import {useState} from "react";
import PersonDetails from "./pages/PersonDetails";
import PersonEdit from "./pages/PersonEdit";
import IPerson from "../app/interfaces/IPerson";
import IPersonManager from "../app/interfaces/IPersonManager";
import PersonManager from "../app/managers/PersonManager";
import IMemberMap from "../app/interfaces/IMemberMap";
import IParentManager from "../app/interfaces/IParentManager";

type Props = {
    person: IPerson,
    onViewChange: Function,
    onBack: Function,
    personManager: IPersonManager,
    parentManager: IParentManager
    familyMembers: IMemberMap,
};

export default ({person, onViewChange, onBack, personManager, familyMembers, parentManager}: Props) => {
    const [edit, setEdit] = useState(false)

    const handleEdit = () => setEdit(true);
    const handleCancelEdit = () => setEdit(false);

    const handlePersonUpdate = (person:IPerson) => {
        personManager.updatePerson(person);
        handleCancelEdit();
    }

    const modifiedManager = new PersonManager(personManager.addPerson,(person: IPerson) => personManager.removePerson(person), handlePersonUpdate)

    return (
        <>
            {!edit && <PersonDetails
                parentManager={parentManager}
                familyMembers={familyMembers}
                onBack={onBack}
                person={person}
                onEdit={handleEdit}
                onViewChange={onViewChange}/>}

            {edit && <PersonEdit
                parentManager={parentManager}
                familyMembers={familyMembers}
                personManager={modifiedManager}
                person={person}
                onCancelEdit={handleCancelEdit}/>}
        </>
    );
}