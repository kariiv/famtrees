import React, {useState} from "react";
import RedFormControl from "../common/RedFormControl";
import BlackRedModal from "../common/BlackRedModal";
import Person from "../../../app/entities/person/Person";
import FlyButton from "../common/FlyButton";
import FormControl from "react-bootstrap/FormControl";

type Props = {
    createPerson: Function
    treeId: number,
}

export default ({ createPerson, treeId }: Props) => {
    const [show, setShow] = useState(false);

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [deathDate, setDeathDate] = useState('')
    const [sex, setSex] = useState(0)

    const allowed = ():boolean => {
        return !!firstName && !!lastName && !!birthday
    }

    const handleFirstName = (e:any) => setFirstName(e.target.value);
    const handleLastName = (e:any) => setLastName(e.target.value);
    const handleBirthday = (e:any) => setBirthday(e.target.value);
    const handleDeathDate = (e:any) => setDeathDate(e.target.value);
    const handleSex = (e:any) => setSex(e.target.value);

    const handleCreatePerson = () => {
        setShow(false)
        const newPerson = new Person(0, firstName, lastName, parseInt(String(sex)), treeId, birthday, deathDate);
        createPerson(newPerson);
        setFirstName('');
        setLastName('');
        setBirthday('');
        setDeathDate('');
        setSex(0);
    }

    return (
        <>
            <BlackRedModal submitDisabled={!allowed()} show={show} onClose={() => setShow(false)} onSubmit={() => handleCreatePerson()} titleRed='Create New ' titleWhite='Person'>
                <RedFormControl value={firstName} onChange={handleFirstName} placeholder="First name..."/>
                <RedFormControl value={lastName} onChange={handleLastName} placeholder="Last name..."/>
                <RedFormControl value={birthday} onChange={handleBirthday} placeholder="Born..." type='date'/>
                <RedFormControl value={deathDate} onChange={handleDeathDate} placeholder="Died..." type='date'/>
                <FormControl as="select" value={sex} onChange={handleSex} placeholder='Sex' className='bg-transparent fam-control border-bottom border-primary text-white'>
                    <option value={0} className='bg-dark hover-primary'>Male</option>
                    <option value={1} className='bg-dark hover-primary'>Female</option>
                </FormControl>
            </BlackRedModal>

            <FlyButton onClick={() => setShow(true)} icon='go-add'/>
        </>
    )
}