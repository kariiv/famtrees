import React from 'react'
import Col from "react-bootstrap/Col";
import PersonProfile from "../common/PersonProfile";
import female from "../../../assets/icons/female-solid.svg";
import male from "../../../assets/icons/male-solid.svg";
import Row from "react-bootstrap/Row";
import {Sex} from "../../../app/constants";
import AddPerson from "../common/AddPerson";
import {useState} from "react";
import IFamilyMember from "../../../app/interfaces/IFamilyMember";

type Props = {
    tag: string,
    sex?: Sex,
    isParent: boolean,
    familyMember: IFamilyMember,
}

export default ({isParent, tag, sex, familyMember}: Props) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Col className='p-1' xs={5} md={4} lg={3} onClick={() => setShow(true)}>
                <div className='fs-5 card bg-secondary text-dark font-weight-bold p-2 hover hover-bg-gray-light'>
                    {sex !== undefined && <PersonProfile img={sex === Sex.MALE ? male : female}/>}
                    <Row>
                        <Col className='text-right mr-2 text-uppercase'>
                            {tag}
                        </Col>
                    </Row>
                    <span className='go go-add go-2x text-center'/>
                </div>
            </Col>

            <AddPerson sex={sex}
                       familyMember={familyMember}
                       show={show}
                       doHide={() => setShow(false)}
                       isParent={isParent}/>
        </>

    );
}