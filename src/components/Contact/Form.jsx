export default function Form() {

    return (

        <form name="contact" method="post" netlify netlify-honeypot="bot-field" onSubmit={ (e) => {
            e.preventDefault()
            alert('Form Send')
            }}>
            <input type="hidden" name="form-name" value="contact" />
            <input type="email" name="email" id="email" placeholder="Mail" />
            <input type="submit" value="SUBMIT" id="submit"/>
        </form>

    )

}