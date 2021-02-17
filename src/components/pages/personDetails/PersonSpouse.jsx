import Card from "react-bootstrap/Card";

export default ({first, last, dead}) => {
    return (
        <Card className='my-2 hover'>
            {dead && <span className='person-dead-sm'/>}<div className='fs-4 text-center text-primary font-weight-bold m-1'>{first}<span className='text-dark'>{last}</span></div>
        </Card>
    )
}