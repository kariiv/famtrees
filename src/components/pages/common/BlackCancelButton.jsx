import Button from "react-bootstrap/Button";

export default ({onClick, children}) => {
    return (
        <Button className='rounded-0 bg-dark text-white r-bl btn-block' onClick={onClick}>{children}</Button>
    )
}