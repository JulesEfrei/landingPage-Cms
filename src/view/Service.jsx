import TitreSection from "../components/TitreSection";
import Cart from "../components/Cart";
import '../styles/service.scss'

export default function Service() {

    const data = [
        {id: 1, src: './assets/seo.svg', title: 'Market Research', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'},
        {id: 2, src: './assets/technology.svg', title: 'Market Research', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'},
        {id: 3, src: './assets/cloud.svg', title: 'Market Research', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'},
        {id: 4, src: './assets/support.svg', title: 'Market Research', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'},
    ]

    return (

        <section className="services">

            <TitreSection h1="Services" lorem="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum" />
    
            <div className="cart-container">

                {data.map(elm => (
                    <Cart src={elm.src} title={elm.title} content={elm.content} key={elm.id} />
                ))}

            </div>

        </section>

    )

}