import PersonProfile from "../common/PersonProfile";
import male from "../../../assets/icons/male-solid.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default () => {
    return (
        <div className='bg-light mx-1 text-dark font-weight-bold card card-body mt-5'>
            <div className=''>
                <PersonProfile img={male} center md/>
                <Row>
                    <Col>
                        <span className='person-dead'/>
                    </Col>
                    <Col className='text-right'>
                        <span className='go go-more-vert hover hover-primary go-2x'/>
                    </Col>
                </Row>

                <Col className='lh-1 mb-2 user-select-none'>
                    <Row className='justify-content-center text-primary'>
                        Madis
                    </Row>
                    <Row className='justify-content-center fs-5 mb-1'>
                        Milling
                    </Row>
                    <Row className='justify-content-center  fs-8 lh-0'>
                        01.02.1978
                    </Row>
                    <Row className='justify-content-center fs-8 lh-0'>
                        25.03.2001
                    </Row>
                </Col>

                <Row>
                    <Col>
                        <Row className='justify-content-center user-select-none'>
                            Kids
                        </Row>
                        <Row className='justify-content-center user-select-none'>
                            0
                        </Row>
                    </Col>

                    <Col className='text-center'>
                        <Row className='justify-content-center user-select-none'>
                            Siblings
                        </Row>
                        <Row className='justify-content-center user-select-none'>
                            5
                        </Row>
                    </Col>

                    <Col className='text-center'>
                        <Row className='justify-content-center user-select-none'>
                            Piblings
                        </Row>
                        <Row className='justify-content-center user-select-none'>
                            4
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
}