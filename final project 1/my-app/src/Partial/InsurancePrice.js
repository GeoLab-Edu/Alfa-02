import { Link } from "react-router-dom";

export default function InsurancePrice() {
    let page = 1;
    let i = 1;
    function stepChecker() {
        let first = document.querySelector("#div-first");
        let second = document.querySelector("#div-second");
        let third = document.querySelector("#div-third");
        let stepsPrev = document.querySelector(`#steps${i - 1}`);
        let steps = document.querySelector(`#steps${i}`);
        let numbers = document.querySelector(`#p${i}`);
        let width = window.matchMedia("(max-width: 800px)")

        if (width.matches && page === 1) {
            steps.style.background = "#E84F5B";
            steps.style.color = "white"
            steps.style.width = "62px"
            steps.style.height = "62px"
            window.scrollTo({ top: 0, behavior: 'smooth' });
            i = i + 1;
            page = page + 1;
        }
        else if (width.matches && page > 1) {
            steps.style.background = "#E84F5B";
            steps.style.color = "white"
            stepsPrev.style.width = "40px"
            stepsPrev.style.height = "40px"
            steps.style.width = "62px"
            steps.style.height = "62px"
            window.scrollTo({ top: 0, behavior: 'smooth' });
            i = i + 1;
            page = page + 1;
        }
        else if (page === i) {
            steps.style.background = "#E84F5B";
            steps.style.color = "white"
            numbers.innerHTML = "+";
            window.scrollTo({ top: 0, behavior: 'smooth' });
            i = i + 1;
            page = page + 1;
        }

        if (page === 2) {
            first.style.display = "none"
            second.style.display = "block"
        }
        else if (page === 3) {
            second.style.display = "none"
            third.style.display = "block"
        }
    }

    return (
        <div>
            <div className="insurance-box grey-background">
                <p>Insurance Price</p>
                <div className="price-div">
                    <div className="price-personal-div">
                        <p>Insurance whole cost:</p>
                        <p>211.2$</p>
                    </div>
                    <div className="price-personal-div">
                        <p>Insurance whole cost (with discount):</p>
                        <p>179.52$</p>
                    </div>
                </div>
            </div>
            <div className="payed">
                <div className="payed-wrapper">
                    <p className="p-margin">Price to be payed:</p>
                    <p className="p-margin">46.85 Gel</p>
                </div>
            </div>
            <div className="flex">
                <Link className="back"
                    to={'/personal/auto-insurance/buy/' + (page - 1)}
                    onClick={stepChecker}
                    disabled={page = 1}
                    style={{ textDecoration: "none", color: "black" }}>back</Link>
                <div className="btn-position">
                    <Link className="btn-style"
                        to={"/personal/auto-insurance/buy/"}
                        onClick={stepChecker}
                        disabled={page > 6}>Next</Link>
                </div>
            </div>
        </div >
    )
}