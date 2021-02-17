import Col from "react-bootstrap/Col";
import PersonProfile from "../common/PersonProfile";
import female from "../../../assets/icons/female-solid.svg";
import Row from "react-bootstrap/Row";

export default ({person, tag, children, onClick}) => {
    return (
        <Col className='p-1' xs={5} md={4} lg={3}>
            <div className='fs-5 card bg-secondary text-dark font-weight-bold p-2 hover hover-bg-gray-light'>
                <PersonProfile img={female} />
                <Row>
                    <Col className='text-right mr-2 text-uppercase'>
                        {tag}
                    </Col>
                </Row>
                {person && <div className='fs-5'>
                    <Row className='text-primary justify-content-center'>
                        {person.getFirstName()}
                    </Row>
                    <Row className='justify-content-center'>
                        {person.getLastName()}
                    </Row>
                </div>}
                {!person && <span className='go go-add go-2x text-center'/>}
            </div>
        </Col>
    )
}