import Section from '../components/Section/section'
import news from '../data/news.json'
import Link from 'next/link'
import StyledLink from '../components/StyledLink'
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
                            <div className="md:flex" key={item.date}>
                                <span className="w-40 font-bold">{item.date}</span>
                                <div className="w-full">
                                    {
                                        item.events.map(event =>
                                        {
                                            return (
                                                <p className="mb-1.5" key={event}>{event}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            
            <Link href="/microblog">
            <button className="transition ease-in-out hover:-translate-y-1 hover:scale-110 bg-amber-400 hover:brightness-110 text-neutral-900 inline-flex px-4 py-2 rounded-lg items-center">
              Microblogging&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </Link>
            </Section>

        </div>
    )
}

export default News;