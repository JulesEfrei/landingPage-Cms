export default function Form() {

    return (

        <form name="contact" method="post" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <input type="email" name="email" id="email" placeholder="Mail" />
            <input type="submit" value="SUBMIT" id="submit"/>
        </form>

    )

}