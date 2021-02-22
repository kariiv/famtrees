import Col from "react-bootstrap/Col";
import PersonProfile from "../common/PersonProfile";
import female from "../../../assets/icons/female-solid.svg";
import male from "../../../assets/icons/male-solid.svg";
import Row from "react-bootstrap/Row";
import IPerson from "../../../app/interfaces/IPerson";
import Sex from "../../../app/entities/person/Sex";
import AddPerson from "../common/AddPerson";
import IParentManager from "../../../app/interfaces/IParentManager";
import IPersonManager from "../../../app/interfaces/IPersonManager";
import {useState} from "react";
import IMemberMap from "../../../app/interfaces/IMemberMap";

type Props = {
    person: IPerson,
    tag: string,
    sex?: Sex,
    isParent: boolean,
    personManager: IPersonManager,
    parentManager: IParentManager,
    familyMembers: IMemberMap,
}

export default ({person, isParent, tag, sex, personManager, parentManager, familyMembers}: Props) => {
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
                        familyMembers={familyMembers}
                       show={show}
                        doHide={() => setShow(false)}
                        person={person}
                        isParent={isParent}
                        personManager={personManager}
                        parentManager={parentManager}/>
        </>

    );
}