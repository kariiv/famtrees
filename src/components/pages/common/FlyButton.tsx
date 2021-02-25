import React from 'react'

type Props = {
    className?: string,
    icon?: string,
    onClick: Function,
    children?: JSX.ElementChildrenAttribute
}

export default ({ className, icon, children, onClick }: Props) => {
    return (
        <span onClick={() => onClick()} className={'fly-button bg-primary hover ' + (className || '')}>
            {icon && <span className={'go go-3x text-dark p-2 ' + icon}/>}
            {children}
        </span>
    )
}