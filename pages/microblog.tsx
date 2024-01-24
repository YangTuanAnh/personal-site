import Section from '../components/Section/section'
import microblog from '../data/microblog.json'
const Microblog = () => {
    return (
        <div>
            <h3 className="underline underline-offset-8 mb-4 decoration-neutral-600 decoration-4">
                Microblogging
            </h3>
            <Section delay={0.2}>
                {
                    microblog.map(item =>
                    {
                        return (
                            <div className="md:flex" key={item.title}>
                                <span className="w-40 font-bold">{item.title}</span>
                                <div className="w-full">
                                    {
                                        item.data.map(it =>
                                        {
                                            return (
                                                <p className="mb-1.5" key={it.date}>{it.date + `: `+ it.content}</p>                                                
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </Section>
        </div>
    )
}

export default Microblog;