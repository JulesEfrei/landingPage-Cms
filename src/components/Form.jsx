import '../styles/titre.scss'
import data from "../data.json"

export default function Form() {

    return (

        <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <input type="email" name="email" id="email" placeholder={data.contact['input-value']} />
            <button type="submit" id="submit">{data.contact['submit-value']}</button>
        </form>

    )

}