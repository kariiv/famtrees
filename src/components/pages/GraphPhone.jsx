import Person from "../../app/entities/person/Person";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import AddPerson from "./common/AddPerson";
import MainCard from "./graphPhone/MainCard";
import RelativeCard from "./graphPhone/RelativeCard";


export default () => {

    const person1 = new Person(2, 'Musi', 'Mihkli');
    const person2 = new Person(3, 'Mikle', 'Mihkli');
    const person3 = new Person(4, 'Muumi', 'Mihk');

    return (
          <Container>

              <Row className='profile-modal-lg scrollable'>
                  <RelativeCard person={person2} tag={'uncle'}/>
                  <RelativeCard person={person1} tag={'mom'}/>

                  <RelativeCard tag={'dad'}/>

                  <RelativeCard person={person3} tag={"unt"}/>
              </Row>

              <Row>
                  <Swiper
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                  >
                      <SwiperSlide><MainCard/></SwiperSlide>
                      <SwiperSlide><MainCard/></SwiperSlide>
                      <SwiperSlide><MainCard/></SwiperSlide>
                      <SwiperSlide><MainCard/></SwiperSlide>
                  </Swiper>
              </Row>

              <Row className='profile-modal-md scrollable'>
                  <RelativeCard person={person2} tag={'son'}/>
                  <RelativeCard person={person2} tag={'doughter'}/>
                  <RelativeCard tag={'child'}/>
              </Row>

              <AddPerson/>

          </Container>
    );
}