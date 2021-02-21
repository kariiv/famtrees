import {ChangeEvent, useState} from "react";
import RedFormControl from "../common/RedFormControl";
import BlackRedModal from "../common/BlackRedModal";
import FamTree from "../../../app/entities/famtree/FamTree";

type Props = {
    onCreate: Function,
    onCancel: Function
    show?: boolean
}

export default ({ onCreate, onCancel, show=true }: Props) => {
    const [name, setName] = useState('');
    const handleName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);

    const onSubmit = () => {
        onCreate(new FamTree(0, name));
        setName('');
    }
    const allowed = ():boolean => {
        return !!name
    }

    return (
        <BlackRedModal submitDisabled={!allowed()} show={show} onClose={onCancel} onSubmit={onSubmit} titleRed='Create New ' titleWhite='Tree'>
            <RedFormControl value={name} onChange={handleName} placeholder="Name..."/>
        </BlackRedModal>
    )
}