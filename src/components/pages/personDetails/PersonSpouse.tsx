import React from 'react';
import Card from "react-bootstrap/Card";
import IPerson from "../../../app/interfaces/IPerson";
import ViewContext from "../../../context/ViewContext";

type Props = {
    person: IPerson,
}

export default ({person}: Props) => {
    return (
        <ViewContext.Consumer>
            {({pushBreadcrumb}) => (
                <Card className='my-2 hover' onClick={() => pushBreadcrumb(person)}>
                    {!person.isAlive() && <span className='person-dead-sm'/>}
                    <div className='fs-4 text-center text-primary font-weight-bold m-1'>{person.getFirstName()}<span className='text-dark'>{person.getLastName()}</span></div>
                </Card>
            )}
        </ViewContext.Consumer>
    )
}