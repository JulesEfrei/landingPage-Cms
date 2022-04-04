import '../styles/cart.scss'

export default function Cart({src, title, content}) {

    return (

        <div className="cart">
            <img src={src} alt="" />
            <h1>{title}</h1>
            <p>{content}</p>
        </div>

    )

}