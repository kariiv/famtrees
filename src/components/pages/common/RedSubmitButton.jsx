import Button from "react-bootstrap/Button";

export default ({onClick, children}) => {
    return (
        <Button className='rounded-0 text-dark btn-block r-br'  onClick={onClick}>{children}</Button>
    )
}