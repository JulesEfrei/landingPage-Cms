export default function Form() {

    return (

        <form name="contact" method="POST" netlify onSubmit={ (e) => e.preventDefault() }>
            <input type="email" name="email" id="email" placeholder="Mail" />
            <input type="submit" value="SUBMIT" id="submit"/>
        </form>

    )

}