type Props = {
    className?: string,
    icon?: string,
    onClick: Function,
    children?: JSX.ElementChildrenAttribute
}

export default (props: Props) => {
    return (
        <span onClick={() => props.onClick()} className={'fly-button bg-primary hover ' + (props.className || '')}>
            {props.icon && <span className={'go go-3x text-dark p-2 ' + props.icon}/>}
            {props.children}
        </span>
    )
}