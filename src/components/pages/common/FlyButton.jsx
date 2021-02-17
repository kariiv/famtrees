export default (props) => {
    return (
        <span {...props} className={'fly-button bg-primary hover ' + (props.className || '')}>
            {props.icon && <span className={'go go-3x text-dark p-2 ' + props.icon}/>}
            {props.children}
        </span>
    )
}