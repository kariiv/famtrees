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

            <BlackRedModal show={show} onClose={handleClose} onSubmit={handleSubmit} titleRed='Create New ' titleWhite='Tree'>
                <RedFormControl value={name} onChange={handleName} placeholder="Name..."/>
            </BlackRedModal>
        </>
    )
}