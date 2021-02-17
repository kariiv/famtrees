import {useState} from "react";
import FlyButton from "../common/FlyButton";
import RedFormControl from "../common/RedFormControl";
import BlackRedModal from "../common/BlackRedModal";

export default ({ onCreate }) => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');

    const handleClose = () => {
        setShow(false);
        setName('');
    }
    const handleSubmit = () => {
        setName('');
        setShow(false);
    }

    const handleShow = () => setShow(true);

    const handleName = (e) => setName(e.target.value);

    return (
        <>
            <FlyButton onClick={handleShow} icon='go-add'/>

            <BlackRedModal show={show} onClose={handleClose} onSubmit={handleSubmit} titleRed='Create New ' titleWhite='Person'>
                <RedFormControl value={name} onChange={handleName} placeholder="First name..."/>
                <RedFormControl value={name} onChange={handleName} placeholder="Last name..."/>
                <RedFormControl value={name} onChange={handleName} placeholder="Born..."/>
                <RedFormControl value={name} onChange={handleName} placeholder="Sex..."/>
            </BlackRedModal>
        </>
    )
}