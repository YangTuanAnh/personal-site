import Section from '../components/Section/section'
import news from '../data/news.json'
const News = () =>
{
    return (
        <div>
            <h3 className="underline underline-offset-8 mb-4 decoration-neutral-600 decoration-4">
                News
            </h3>
            <Section delay={0.2}>
                {
                    news.map(item =>
                    {
                        return (
                            <div className="md:flex">
                                <span className="w-40 font-bold">{item.date}</span>
                                <div className="w-full">
                                    {
                                        item.events.map(event =>
                                        {
                                            return (
                                                <p className="mb-1.5 text-justify">{event}</p>
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

export default News;