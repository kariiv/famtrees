import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';
import MainCard from "./graphPhone/MainCard";
import RelativeCard from "./graphPhone/RelativeCard";
import IPerson from "../../app/interfaces/IPerson";
import {FamilyClass} from "../../app/constants";
import { Sex } from "../../app/constants";
import AddRelative from "./graphPhone/AddRelative";
import IFamilyMember from "../../app/interfaces/IFamilyMember";
import PersonBreadcrumb from "./common/PersonBreadcrumb";
import GetParents from "../../app/services/GetParents";
import Parents from "../../app/interfaces/Parents";

function sortFamilyMembers(list: IFamilyMember[]) {
    list.sort((a, b) => {
        const ad = new Date(a.Person.getBirthday());
        const bd = new Date(b.Person.getBirthday());
        if (ad < bd)     return -1;
        else if(ad > bd) return  1;
        else             return  0;
    })
}

type Props = {
    familyMember: IFamilyMember,
    breadcrumb: IPerson[],
};

type State = {
    index: number,
};

class GraphPhone extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            index: -1,
        }
    }

    componentDidMount() {
        this.handleSetChosenIndex();
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
        if (this.state.index === -1)
            return this.handleSetChosenIndex();

        const prevBread = prevProps.breadcrumb;
        const bread = this.props.breadcrumb;
        if (prevBread[prevBread.length-1] !== bread[bread.length -1])
            return this.setState({index:-1})
    }

    handleSetChosenIndex() {
        const { familyMember } = this.props;
        const siblings = [...familyMember.siblings, familyMember]
        sortFamilyMembers(siblings)
        this.setState({index: siblings.indexOf(familyMember)})
    }

    handleSlideChange = (index: number) => this.setState({index});

    render() {
        const { familyMember, breadcrumb } = this.props;
        const { index } = this.state;
        if (index === -1) return null;

        const siblings = [...familyMember.siblings, familyMember]
        sortFamilyMembers(siblings)

        let slideIndex;
        if (index !== -1) {
            slideIndex = index
            if (slideIndex > siblings.length -1)
                slideIndex = 0;
        }
        else slideIndex = siblings.indexOf(familyMember);

        const scrolledFamilyMember = siblings[slideIndex];

        const { mom, dad } = GetParents(scrolledFamilyMember);

        const children = scrolledFamilyMember.children
        sortFamilyMembers(children)

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

            <Swiper spaceBetween={4}
                    slidesPerView={1}
                    onSlideChange={(x) => this.handleSlideChange(x.activeIndex)}
                    initialSlide={slideIndex}
            >
                {siblings.map(f => <SwiperSlide key={f.Person.getId()}>
                    <MainCard familyMember={f} compareFM={familyMember} />
                </SwiperSlide>)}
            </Swiper>

            <Row className='mt-2 scrollable'>
                { children.map(f => <RelativeCard key={f.Person.getId()} person={f.Person} familyClass={FamilyClass.CHILD}/>) }
                <AddRelative familyMember={familyMember} isParent={true} tag={'child'}/>
            </Row>

        </Container>);
    }
}

export default GraphPhone;