import Footer from "../Footer"
import AddDriver from "./AddDriver"
import Insurance from "./Insurance"
import InsurancePrice from "./InsurancePrice"
import PartialHead from "./PartialHead"
import Steps from "./Steps"

export default function Partial() {
    return (
        <div>
            <PartialHead />
            <Steps />
            <Insurance />
            <InsurancePrice />
            <Footer />
            <AddDriver />
        </div>
    )
}