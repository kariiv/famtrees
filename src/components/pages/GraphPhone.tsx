import Person from "../../app/entities/person/Person";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import AddPerson from "./common/AddPerson";
import MainCard from "./graphPhone/MainCard";
import RelativeCard from "./graphPhone/RelativeCard";
import IPerson from "../../app/interfaces/IPerson";
import {Component} from "react";

type Props = {
    person: IPerson,
    onViewChange: Function,
    people: IPerson[],
};

type State = {
    breadcrumb: IPerson[]
};


class GraphPhone extends Component<Props, State> {

    constructor(props:Props) {
        super(props);

        this.state = {
            breadcrumb: []
        }
    }

    render() {
        const { person, onViewChange, people } = this.props;

        return (<Container>
            <Row className='profile-modal-lg scrollable'>
                <RelativeCard person={person} tag={'uncle'}/>
                <RelativeCard person={person} tag={'mom'}/>

                <RelativeCard tag={'dad'}/>

                <RelativeCard person={person} tag={"unt"}/>
            </Row>

            <Row>
                <Col>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <MainCard onViewChange={onViewChange} person={person} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <MainCard onViewChange={onViewChange} person={person} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <MainCard onViewChange={onViewChange} person={person} />
                        </SwiperSlide>
                        {/*<SwiperSlide><MainCard/></SwiperSlide>*/}
                        {/*<SwiperSlide><MainCard/></SwiperSlide>*/}
                        {/*<SwiperSlide><MainCard/></SwiperSlide>*/}
                    </Swiper>
                </Col>
            </Row>

            <Row className='profile-modal-md scrollable'>
                <RelativeCard person={person} tag={'son'}/>
                <RelativeCard person={person} tag={'doughter'}/>
                <RelativeCard tag={'child'}/>
            </Row>

            {/*<AddPerson onSelect={()=>{}}/>*/}
        </Container>);
    }
}

export default GraphPhone;