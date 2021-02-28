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
import PersonBreadcrumb from "./common/PersonBreadcrumb";

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
        <PersonBreadcrumb familyMember={familyMember} breadcrumb={breadcrumb}/>

        <Row className='scrollable'>

            {!!dad && dad.siblings.map(s => <RelativeCard key={s.Person.getId()} person={s.Person} familyClass={FamilyClass.PIBLING}/>) }

            {!!dad && <RelativeCard person={dad.Person} familyClass={FamilyClass.PARENT}/>}
            {!dad && <AddRelative familyMember={familyMember} isParent={false} tag={'dad'} sex={Sex.MALE}/>}

            {!!mom && <RelativeCard person={mom.Person} familyClass={FamilyClass.PARENT} />}
            {!mom && <AddRelative familyMember={familyMember} isParent={false} tag={'mom'} sex={Sex.FEMALE}/>}

            {!!mom && mom.siblings.map(s => <RelativeCard key={s.Person.getId()} person={s.Person} familyClass={FamilyClass.PIBLING}/>) }

        </Row>

        <Swiper spaceBetween={4} slidesPerView={1}>
            <SwiperSlide>
                <MainCard familyMember={familyMember} />
            </SwiperSlide>

            {siblings.map(f => <SwiperSlide key={f.Person.getId()}>
                <MainCard familyMember={f} />
            </SwiperSlide>)}
        </Swiper>

        <Row className='mt-2 scrollable'>
            { children.map(f => <RelativeCard key={f.Person.getId()} person={f.Person} familyClass={FamilyClass.CHILD}/>) }
            <AddRelative familyMember={familyMember} isParent={true} tag={'child'}/>
        </Row>

    </Container>);
}