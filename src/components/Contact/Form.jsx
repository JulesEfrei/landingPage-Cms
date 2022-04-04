export default function Form() {

    return (

        <form name="contact" method="post" netlify onSubmit={ (e) => {
            e.preventDefault()
            alert('Form Send')
            }}>
            <input type="email" name="email" id="email" placeholder="Mail" />
            <input type="submit" value="SUBMIT" id="submit"/>
        </form>

    )

}