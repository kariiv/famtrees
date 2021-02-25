import React, {useState} from "react";
import PersonDetails from "./pages/PersonDetails";
import PersonEdit from "./pages/PersonEdit";
import IFamilyMember from "../app/interfaces/IFamilyMember";
import IPerson from "../app/interfaces/IPerson";

type Props = {
    familyMember: IFamilyMember,
    breadcrumb: IPerson[]
};

export default ({familyMember, breadcrumb}: Props) => {
    const [edit, setEdit] = useState(false)

    const handleEdit = () => setEdit(true);
    const handleCancelEdit = () => setEdit(false);

    if (edit)
        return <PersonEdit familyMember={familyMember} onCancelEdit={handleCancelEdit}/>
    return <PersonDetails breadcrumb={breadcrumb} familyMember={familyMember} onEdit={handleEdit} />
}