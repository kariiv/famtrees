import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RedSubmitButton from "./RedSubmitButton";
import BlackCancelButton from "./BlackCancelButton";
import React from "react";

type Props = {
    show: boolean,
    onSubmit: Function,
    submitDisabled?: boolean,
    onClose: Function,
    children: React.ReactNode,
    titleRed?: string,
    titleWhite?: string
}


export default ({ show, onSubmit, onClose, children, titleRed, titleWhite, submitDisabled=false }: Props) => {
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
                            <RedSubmitButton disabled={submitDisabled} onClick={onSubmit}>Create New</RedSubmitButton>
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
    )
}