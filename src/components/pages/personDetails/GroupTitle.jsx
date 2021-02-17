export default ({title, caps = true}) => {
    return (
        <h3 className={'text-center mt-3 font-weight-bold' + (caps? ' text-uppercase': '')}><span className='text-primary'>{title}</span></h3>
    )
}