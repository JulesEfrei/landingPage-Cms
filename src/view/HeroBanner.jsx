import '../styles/heroBanner.scss'
import data from '../data.json'

export default function HeroBanner() {

    return (

        <section className="hero">

            <div className="left">
                <h1>{data.hero.title[0]} <span>{data.hero.title[1]}</span> {data.hero.title[2]}</h1>
                <p>{data.hero.paragraph}</p>
                <button>{data.hero.button}</button>
            </div>

            <div className="right">
                <img src={data.hero.image} alt="Banner" className="img" />
            </div>

        </section>

    )

}