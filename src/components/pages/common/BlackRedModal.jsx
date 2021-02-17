import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RedSubmitButton from "../common/RedSubmitButton";
import BlackCancelButton from "../common/BlackCancelButton";

export default ({ show, onSubmit, onClose, children, titleRed, titleWhite }) => {
    return (<Modal
                show={show}
                size="sm"
                centered
                backdrop="static"
                keyboard={false}
            >
            {(titleRed || titleWhite) && <Modal.Header>
                <Modal.Title className='m-auto text-primary'>{titleRed}<span className='text-white'>{titleWhite}</span></Modal.Title>
            </Modal.Header>}
                <Modal.Body >
                    {children}
                </Modal.Body>
                <Modal.Footer>
                    <Row className="w-100">
                        <Col className='pr-0'>
                            <BlackCancelButton onClick={onClose}>Back</BlackCancelButton>
                        </Col>
                        <Col className='pl-2'>
                            <RedSubmitButton onClick={onSubmit}>Create New</RedSubmitButton>
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
    )
}