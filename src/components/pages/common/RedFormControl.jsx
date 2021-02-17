import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";


export default ({onChange, value, placeholder = "Search..."}) => {
    return (
        <Container fluid>
            <FormControl value={value} onChange={onChange} placeholder={placeholder} className='bg-transparent fam-control border-bottom border-primary text-white'/>
        </Container>
    )
}