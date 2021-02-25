import React, {useState} from "react";
import PersonDetails from "./pages/PersonDetails";
import PersonEdit from "./pages/PersonEdit";
import IFamilyMember from "../app/interfaces/IFamilyMember";

type Props = {
    familyMember: IFamilyMember,
};

export default ({familyMember}: Props) => {
    const [edit, setEdit] = useState(false)

    const handleEdit = () => setEdit(true);
    const handleCancelEdit = () => setEdit(false);

    if (edit)
        return <PersonEdit familyMember={familyMember} onCancelEdit={handleCancelEdit}/>
    return <PersonDetails familyMember={familyMember} onEdit={handleEdit} />
}