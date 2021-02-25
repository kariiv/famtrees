import ViewContext from "../../../context/ViewContext";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import React from "react";
import IPerson from "../../../app/interfaces/IPerson";
import IFamilyMember from "../../../app/interfaces/IFamilyMember";

type Props = {
    breadcrumb: IPerson[]
    familyMember: IFamilyMember
}

export default ({breadcrumb, familyMember}: Props) => {

    return (
        <ViewContext.Consumer>
            { ({clearBreadcrumb, pushBreadcrumb}) => (
                <Breadcrumb>
                    <span className='go go-back mr-2 hover hover-primary' onClick={() => clearBreadcrumb()}/>
                    { breadcrumb.map(p => {
                        const isActive = p.getId() === familyMember.Person.getId()
                        const click = isActive ? ()=>{}: () => pushBreadcrumb(p)
                        return (<Breadcrumb.Item key={p.getId()} active={isActive} onClick={click}
                                                 className='text-primary'>{p.getFirstName()}<span
                            className='text-white'>{p.getLastName()}</span></Breadcrumb.Item>)
                    }) }
                </Breadcrumb>)}
        </ViewContext.Consumer>
    )
}