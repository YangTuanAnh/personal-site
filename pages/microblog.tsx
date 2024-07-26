import Section from '../components/Section/section'
import microblog from '../data/microblog.json'
const Microblog = () => {
    return (
        <div>
            <h3 className="underline underline-offset-8 mb-4 decoration-neutral-600 decoration-4">
                Microblogging since 2023
            </h3>
            {
                microblog.map(item =>
                {
                    return (
                        <div className="text-sm mb-10" key={item.title}>
                            <p className="w-40 font-bold mb-2">{item.title}</p>
                            <div className="w-full">
                                {
                                    item.data.map(it =>
                                    {
                                        return (
                                            <div className="w-full mb-1.5 flex" key={it.date}>
                                                <p className="w-40 font-semibold text-neutral-400">{it.date}</p> 
                                                <p className="w-full">{it.content}</p>    
                                            </div>                                           
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Microblog;