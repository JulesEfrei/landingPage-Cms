import TitreSection from "../components/TitreSection";
import Cart from "../components/Cart";
import '../styles/service.scss'
import data from "../data.json"

export default function Service() {

    return (

        <section className="services">

            <TitreSection h1="Services" lorem="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum" />
    
            <div className="cart-container">

                {data['services']['cart'].map(elm => (
                    <Cart src={elm.src} title={elm.title} content={elm.content} key={elm.id} />
                ))}

            </div>

        </section>

    )

}