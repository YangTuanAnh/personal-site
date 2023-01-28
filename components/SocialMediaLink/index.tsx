const SocialMediaLink = ({href, children, noBlank}:{href:string, children:any, noBlank?:boolean}) => {
    return (
        <a  href={href} 
            className="transition ease-in-out delay-50 brightness-90 dark:brightness-100 flex items-center font-semibold font-sans text-pink-400 py-2 px-4 w-fit hover:bg-pink-200 transition ease-in-out rounded-lg"
            target={noBlank===true ? "_self" : "_blank"}
            rel="noreferrer">
                {children}
        </a>
    )
}

export default SocialMediaLink;