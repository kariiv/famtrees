import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';

import MainCard from "./graphPhone/MainCard";
import RelativeCard from "./graphPhone/RelativeCard";
import IPerson from "../../app/interfaces/IPerson";
import MemberClass from "../../app/services/MemberClass";
import {FamilyClass} from "../../app/constants";
import { Sex } from "../../app/constants";
import AddRelative from "./graphPhone/AddRelative";
import IFamilyMember from "../../app/interfaces/IFamilyMember";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ViewContext from "../../context/ViewContext";

type Props = {
    familyMember: IFamilyMember,
    breadcrumb: IPerson[],
};

export default ({ familyMember, breadcrumb}: Props) => {

    let mom;
    let dad;
    const parents = familyMember.parents
    for (const parent of parents) {
        if (parent.Person.getSex() === Sex.MALE) dad = parent;
        else mom = parent
    }

    const siblings = familyMember.siblings
    const children = familyMember.children

    // Todo: Piblings add
    return (<Container>

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

        <Row className='scrollable'>

            {!!dad && <RelativeCard person={dad.Person} tag={MemberClass(dad.Person, FamilyClass.PARENT)}/>}
            {!dad && <AddRelative familyMember={familyMember} isParent={false} tag={'dad'} sex={Sex.MALE}/>}

            {!!mom && <RelativeCard person={mom.Person} tag={MemberClass(mom.Person, FamilyClass.PARENT)}/>}
            {!mom && <AddRelative familyMember={familyMember} isParent={false} tag={'mom'} sex={Sex.FEMALE}/>}
        </Row>

        <Row>
            <Col>
                <Swiper spaceBetween={50} slidesPerView={1}>

                    <SwiperSlide>
                        <MainCard familyMember={familyMember} />
                    </SwiperSlide>

                    {siblings.map(f => <SwiperSlide key={f.Person.getId()}>
                        <MainCard familyMember={f} />
                    </SwiperSlide>)}

                </Swiper>
            </Col>
        </Row>

        <Row className='profile-modal-md scrollable'>
            { children.map(f => <RelativeCard key={f.Person.getId()} person={f.Person} tag={MemberClass(f.Person, FamilyClass.CHILD)}/>) }
            <AddRelative familyMember={familyMember} isParent={true} tag={'child'}/>
            {/*<RelativeCard tag={'child'}/>*/}
        </Row>

    </Container>);
}