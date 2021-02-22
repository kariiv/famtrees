import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';

import MainCard from "./graphPhone/MainCard";
import RelativeCard from "./graphPhone/RelativeCard";
import IPerson from "../../app/interfaces/IPerson";
import IMemberMap from "../../app/interfaces/IMemberMap";
import MemberClass from "../../app/entities/famtree/MemberClass";
import Class from "../../app/entities/famtree/Class";
import Sex from "../../app/entities/person/Sex";
import AddRelative from "./graphPhone/AddRelative";
import IParentManager from "../../app/interfaces/IParentManager";
import IPersonManager from "../../app/interfaces/IPersonManager";

type Props = {
    person: IPerson,
    onViewChange: Function,
    familyMembers: IMemberMap,
    parentManager: IParentManager
    personManager: IPersonManager
};

export default ({ person, onViewChange, familyMembers, parentManager, personManager}: Props) => {
    // const [breadcrumb, setBreadcrumb] = useState<IPerson[]>([])
    // Todo: Add breadcrumb
    const familyMember = familyMembers[person.getId()];

    var mom;
    var dad;
    const parents = familyMember.parents
    for (const parent of parents) {
        if (parent.Person.getSex() === Sex.MALE) dad = parent;
        else mom = parent
    }

    const siblings = familyMember.siblings
    const children = familyMember.children

    console.log("Relatives", siblings, children)

    // Todo: Piblings add
    return (<Container>
        <Row className='profile-modal-lg scrollable'>

            {!!dad && <RelativeCard person={dad.Person} tag={MemberClass(dad.Person, Class.PARENT)}/>}
            {!dad && <AddRelative familyMembers={familyMembers} personManager={personManager} parentManager={parentManager} person={person} isParent={false} tag={'dad'} sex={Sex.MALE}/>}

            {!!mom && <RelativeCard person={mom.Person} tag={MemberClass(mom.Person, Class.PARENT)}/>}
            {!mom && <AddRelative familyMembers={familyMembers} personManager={personManager} parentManager={parentManager} person={person} isParent={false} tag={'mom'} sex={Sex.FEMALE}/>}

        </Row>

        <Row>
            <Col>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <MainCard onViewChange={onViewChange} familyMember={familyMember} />
                    </SwiperSlide>

                    {siblings.map(f => <SwiperSlide key={f.Person.getId()}>
                        <MainCard onViewChange={onViewChange} familyMember={f} />
                    </SwiperSlide>)}

                </Swiper>
            </Col>
        </Row>

        <Row className='profile-modal-md scrollable'>
            { children.map(f => <RelativeCard key={f.Person.getId()} person={f.Person} tag={MemberClass(f.Person, Class.CHILD)}/>) }
            <AddRelative familyMembers={familyMembers} personManager={personManager} parentManager={parentManager} person={person} isParent={true} tag={'child'}/>
            {/*<RelativeCard tag={'child'}/>*/}
        </Row>

    </Container>);
}