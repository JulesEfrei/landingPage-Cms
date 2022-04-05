import '../styles/contact.scss'
import Form from '../components/Form'
import TitreSection from '../components/TitreSection'
import data from "../data.json"

function Contact() {

    return (

        <section>

            <TitreSection h1={data.contact.title} lorem={data.contact.subtitle} />

            <div className="form-container">
                <Form />
            </div>

        </section>

    )

}

export default Contact