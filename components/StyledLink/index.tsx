const StyledLink = ({href, children}:{href:string, children:any}) => {
    return (
        <a  href={href} 
            className="transition ease-in-out delay-150 brightness-75 dark:brightness-100 text-highlight hover:underline hover:underline-offset-4"
            target="_blank">
                {children}
        </a>
    )
}

export default StyledLink;