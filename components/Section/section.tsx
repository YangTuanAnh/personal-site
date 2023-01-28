import {motion} from 'framer-motion'

const Section = ({children, delay}: {children:any, delay: number}) => {
    return (
        <motion.div
            initial={{y: 10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay}}
            className="mb-12">
            {children}
        </motion.div>
    )
}

export default Section;