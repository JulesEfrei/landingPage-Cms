import '../styles/heroBanner.scss'
import data from '../data.json'

export default function HeroBanner() {

    return (

        <section className="hero">

            <div className="left">
                <h1>{data.hero.title}</h1>
                <p>{data.hero.paragraph}</p>
                <button>GET STARTED</button>
            </div>

            <div className="right">
                <img src="./assets/banner.png" alt="Banner" className="img" />
            </div>

        </section>

    )

}