import React from 'react'
type Props = {
    img: string,
    lg?: boolean,
    md?: boolean,
    sm?: boolean,
    center?: boolean,
}

export default ({ img, lg, md, sm, center}: Props) => {
    let size = (lg && 'lg') || (md && 'md') || (sm && 'sm')
    if (!size) size = "sm";
    const addon = center ? "profile-center" : '';
    return (
        <div className={addon + ' border-wrapper-round user-select-none bg-dark profile profile-' + size}>
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