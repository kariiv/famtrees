export default ({ img, lg, md, sm, center}) => {
    let size = (lg && 'lg') || (md && 'md') || (sm && 'sm')
    if (!size) size = "sm";
    center = center ? "profile-center" : '';
    return (
        <div className={center + ' border-wrapper-round user-select-none bg-dark profile profile-' + size}>
            <div className='border-wrapper-round bg-primary'>
                <div className='border-wrapper-round bg-dark'>
                    <div className="text-center person-profile">
                        <img src={img} className="rounded" alt="..."/>
                    </div>
                </div>
            </div>
        </div>
    )
}