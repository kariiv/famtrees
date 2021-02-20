import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IFamTree from "../../../app/interfaces/IFamTree";

type Props = {
    famTree: IFamTree,
    onClick: Function
}

export default ({famTree, onClick}: Props) => {
    return (
        <Row className='my-3 p-2 mx-2 border-white border-bottom border-top hover bg-dark' onClick={() => onClick()}>
            <Col className='text-primary fs-3'>
                {famTree.getName()}
            </Col>
            <Col className='text-right align-self-center'>
                {famTree.getPeopleCount()} Members
            </Col>
        </Row>
    );
}