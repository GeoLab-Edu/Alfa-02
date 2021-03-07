import Contacts from "./Contacts"
import Offer from "./Offer"
import Products from "../Products"
import Footer from "../Footer"

export default function Company() {
    return (
        <div>
            <Offer />
            <Contacts />

            <p className="p">EXCLUSIVE PRODUCTS</p>
            <Products />
            <Footer />
        </div>
    )
}