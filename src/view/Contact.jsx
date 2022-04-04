import '../styles/contact.scss'
import Form from '../components/Contact/Form'
import TitreSection from '../components/TitreSection'

function Contact() {

    return (

        <section>

            <TitreSection h1="Contact" lorem="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum" />

            <div className="form-container">
                <Form />
            </div>

        </section>

    )

}

export default Contact