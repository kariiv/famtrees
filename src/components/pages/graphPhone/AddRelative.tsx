import Col from "react-bootstrap/Col";
import PersonProfile from "../common/PersonProfile";
import female from "../../../assets/icons/female-solid.svg";
import male from "../../../assets/icons/male-solid.svg";
import Row from "react-bootstrap/Row";
import IPerson from "../../../app/interfaces/IPerson";
import Sex from "../../../app/entities/person/Sex";

type Props = {
    person: IPerson,
    tag: string,
    sex: Sex
}

export default ({person, tag, sex}: Props) => {
    return (
        <Col className='p-1' xs={5} md={4} lg={3}>
            <div className='fs-5 card bg-secondary text-dark font-weight-bold p-2 hover hover-bg-gray-light'>
                {sex && <PersonProfile img={person.getSex() === Sex.MALE ? male : female}/>}
                <Row>
                    <Col className='text-right mr-2 text-uppercase'>
                        {tag}
                    </Col>
                </Row>
                <span className='go go-add go-2x text-center'/>
            </div>
        </Col>
    );
}