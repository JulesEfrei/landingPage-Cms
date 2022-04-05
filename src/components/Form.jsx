import '../styles/titre.scss'

export default function Form() {

    return (

        <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <input type="email" name="email" id="email" placeholder="Mail" />
            <button type="submit" id="submit">SUBMIT</button>
        </form>

    )

}