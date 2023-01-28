const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="opacity-40 text-sm p-10 mt-6 text-center w-full">
            @&nbsp;{currentYear}&nbsp;Yang Tuấn Anh. All rights reserved
        </footer>
    )
}

export default Footer;