import Image from "next/image";
import thumbTest from "../public/images/waffle_logo.png";

const Custom404 = () => {
    return (
        <div className="mt-10 text-center">
            <h1>404 - Page Not Found</h1>
            <Image src={thumbTest} alt="Logo" className="mx-auto"/>
        </div>
    )
}

export default Custom404;