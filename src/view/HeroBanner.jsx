import '../styles/heroBanner.scss'

export default function HeroBanner() {

    return (

        <section className="hero">

            <div className="left">
                <h1>Make <span>business</span> width us & become beautiful</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button>GET STARTED</button>
            </div>

            <div className="right">
                <img src="./assets/banner.png" alt="Banner" className="img" />
            </div>

        </section>

    )

}