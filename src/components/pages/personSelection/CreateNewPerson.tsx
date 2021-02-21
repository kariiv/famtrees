import {useState} from "react";
import RedFormControl from "../common/RedFormControl";
import BlackRedModal from "../common/BlackRedModal";
import Person from "../../../app/entities/person/Person";

type Props = {
    onCancel: Function
    onCreate: Function
    show?: boolean,
    treeId: number,
}

export default ({ onCreate, show=true, onCancel, treeId }: Props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [deathDate, setDeathDate] = useState('')
    // const [sex, setSex] = useState(person.getSex())

    const allowed = ():boolean => {
        return !!firstName && !!lastName && !!birthday
    }

    const handleFirstName = (e:any) => setFirstName(e.target.value);
    const handleLastName = (e:any) => setLastName(e.target.value);
    const handleBirthday = (e:any) => setBirthday(e.target.value);
    const handleDeathDate = (e:any) => setDeathDate(e.target.value);
    // const handleSex = (e:any) => setSex(value);

    const handleCreatePerson = () => {
        const newPerson = new Person(0, firstName, lastName, 0, treeId, birthday, deathDate);
        onCreate(newPerson);
        setFirstName('');
        setLastName('');
        setBirthday('');
        setDeathDate('');
    }


    return (
        <BlackRedModal submitDisabled={!allowed()} show={show} onClose={onCancel} onSubmit={() => handleCreatePerson()} titleRed='Create New ' titleWhite='Person'>
            <RedFormControl value={firstName} onChange={handleFirstName} placeholder="First name..."/>
            <RedFormControl value={lastName} onChange={handleLastName} placeholder="Last name..."/>
            <RedFormControl value={birthday} onChange={handleBirthday} placeholder="Born..." type='date'/>
            <RedFormControl value={deathDate} onChange={handleDeathDate} placeholder="Died..." type='date'/>
            {/*<RedFormControl value={deathDate} onChange={handleName} placeholder="Sex..." type='date'/>*/}
        </BlackRedModal>
    )
}