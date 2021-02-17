export default ({caps=false, red='', white=''}) => {
    return <h1 className={'text-center my-4' + (caps? ' text-uppercase': '')}><span className='text-primary'>{red}</span>{white}</h1>
}