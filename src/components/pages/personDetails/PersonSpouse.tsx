import Card from "react-bootstrap/Card";
import IPerson from "../../../app/interfaces/IPerson";

type Props = {
    onClick?: Function,
    person: IPerson,
}

export default ({person, onClick = () => {}}: Props) => {
    return (
        <Card className='my-2 hover' onClick={() => onClick()}>
            {!person.isAlive() && <span className='person-dead-sm'/>}
            <div className='fs-4 text-center text-primary font-weight-bold m-1'>{person.getFirstName()}<span className='text-dark'>{person.getLastName()}</span></div>
        </Card>
    )
}