export default function Insurance() {


    function showReview() {
        let review = document.querySelector("#review");
        if (review.style.display === "none") {
            review.style.display = "flex";
        }
        else {
            review.style.display = "none";
        }
    }

    function AddDriver() {
        let driver = document.querySelector("#add-driver");
        driver.style.display = "flex"
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.pauseAll = true;
        let background = document.querySelector(".img");
        let steps = document.querySelector(".partial-steps-wrap");
        let third = document.querySelector("#div-third");
        steps.style.filter = "blur(3px)"
        background.style.filter = "blur(3px)"
        third.style.filter = "blur(3px)"
        document.body.style.overflow = "hidden"
    }

    return (
        <div>
            <div id="div-first">
                {/* insurance  */}
                <div className="insurance-box insurance-wrap">
                    <p style={{ marginBottom: "4%" }} >Insurance Type</p>
                    <div className="input-wrap" style={{ marginBottom: "3%" }} id="wrap-input">
                        <label className="input-container">
                            <input type="radio" name="complete" /> Complete
                    <span class="checkmark"></span>
                        </label>
                        <label className="input-container">
                            <input type="radio" name="complete" /> Partial
                    <span class="checkmark"></span>
                        </label>
                    </div>
                </div>

                {/* partial auto insurance  */}
                <div className="insurance-box insurance-wrap" >
                    <p style={{ marginBottom: "4%", textDecoration: "underline" }}>Partial Auto Insurance</p>
                    <div className="input-wrap personal-width" style={{ marginBottom: "3%" }}>
                        <div id="div">
                            <p style={{ margin: "1%" }}>Value</p>
                            <form>
                                <input type="text" name="complete" className="partial-steps personal-input text" />
                                <input type="submit" class="submit usd" value="USD" />
                            </form>
                        </div>
                        <div >
                            <p style={{ margin: "1%" }}>Vehicle type</p>
                            <input type="text" name="complete" className="partial-steps personal-input text" />
                        </div>
                    </div>
                    <div className="input-wrap personal-width" style={{ marginBottom: "3%" }}>
                        <div >
                            <p style={{ margin: "1%" }}>Date of issue</p>
                            <input type="text" name="complete" className="partial-steps personal-input text" />
                        </div>
                        <div >
                            <p style={{ margin: "1%" }}>Client Age</p>
                            <input type="text" name="complete" className="partial-steps personal-input text" />
                        </div>
                    </div>
                    <div className="input-wrap personal-width" style={{ marginBottom: "0.5%" }}>
                        <div >
                            <p style={{ margin: "1%" }}>Payment schedule</p>
                            <input type="text" name="complete" className="partial-steps personal-input text" />
                        </div>
                        <div id="div">
                            <p style={{ margin: "1%" }}>Deductible </p>
                            <form>
                                <input type="text" name="complete" className="partial-steps personal-input text" />
                                <button className="submit question-mark"
                                    id="question"
                                    onMouseOver={showReview}
                                    onMouseLeave={showReview}
                                >
                                    <p onMouseOver={showReview}
                                        onMouseLeave={showReview}>?</p>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="meaning-place" style={{ display: "none" }} id="review">
                        <div className="meaning-box">
                            <p>minimum amount not
                            compensated by the
                        insurance company</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* do you want to improve your policy? */}


            <div id="div-second" style={{ display: "none" }}>
                <p style={{ marginBottom: "2%" }} className="improve-policy">Do you want to improve your policy?</p>
                <div className="insurance-box insurance-wrap" >

                    <div className="display-drive">
                        <p >Driver and passengers accident insurance</p>
                        <button className="question-mark-new"
                            id="question-up"
                        >
                            <p >?</p>
                        </button>
                    </div>
                    <div className="input-wrap width-30" style={{ marginBottom: "3%", justifyContent: "space-around" }} id="wrap-input">
                        <label className="input-container">
                            <input type="radio" name="complete" /> No
                    <span class="checkmark"></span>
                        </label>
                        <label className="input-container">
                            <input type="radio" name="complete" /> Yes
                    <span class="checkmark"></span>
                        </label>
                    </div>
                    <div className="d-p-container" >
                        <p>Driver and passengers insurance limit</p>
                        <form style={{ marginBottom: "2%", marginLeft: "18%" }}>
                            <input type="text" name="complete" className="partial-steps personal-input text" />
                            <input type="submit" class="submit usd personal-usd" value="USD" id="usd-personal" />
                        </form>
                    </div>
                    <div className="display-drive" id="question-bottom">
                        <button className="question-mark-new"

                            id="question-bottom"
                        >
                            <p >?</p>
                        </button>
                    </div>
                </div>

                {/* motor liability */}
                <div className="insurance-box insurance-wrap" >
                    <div className="display-drive" >
                        <p>Motor liability insurance</p>
                        <button className="question-mark-new"
                            id="question-up"
                        >
                            <p >?</p>
                        </button>
                    </div>
                    <div className="input-wrap width-30" id="wrap-input" style={{ marginBottom: "3%", justifyContent: "space-around" }}>
                        <label className="input-container" >
                            <input type="radio" name="complete" /> No
                    <span class="checkmark"></span>
                        </label>
                        <label className="input-container">
                            <input type="radio" name="complete" /> Yes
                    <span class="checkmark"></span>
                        </label>
                    </div>
                    <div className="display-drive" id="question-bottom">
                        <button className="question-mark-new"
                            id="question-bottom"
                        >
                            <p >?</p>
                        </button>
                    </div>
                </div>


                {/* unlimited drivers */}

                <div className="insurance-box insurance-wrap" >
                    <div className="display-drive">
                        <p>Has unlimited drivers</p>
                        <button className="question-mark-new"
                            id="question-up"
                        >
                            <p >?</p>
                        </button>
                    </div>
                    <div className="input-wrap width-30" id="wrap-input" style={{ marginBottom: "3%", justifyContent: "space-around" }}>
                        <label className="input-container">
                            <input type="radio" name="complete" /> No
                    <span class="checkmark"></span>
                        </label>
                        <label className="input-container">
                            <input type="radio" name="complete" /> Yes
                    <span class="checkmark"></span>
                        </label>
                    </div>
                    <div className="display-drive" id="question-bottom">
                        <button className="question-mark-new"
                            id="question"
                        >
                            <p >?</p>
                        </button>
                    </div>
                </div>
            </div>


            {/* authorized driver  */}


            <div id="div-third" style={{ display: "none" }}>
                <div className="authorized-driver">
                    <p style={{ textTransform: "uppercase", paddingRight: "5%" }}>authorized drivers</p>
                    <button className="question-mark-new unset"
                        id="question-authorized"
                    >
                        <p >?</p>
                    </button>
                </div>
                <div className="small-box" id="add-driver-box" >
                    {/* <div className="authorized-text-wrap" id="add-driver-wrapper"> */}
                    {/* <p className="px27" id="div-name"> beso Dvalishvili</p>
                        <p className="authorized-p" id="div-ID"> feqqvq</p>
                        <p className="authorized-p" id="div-date">qeveqv</p> */}
                    {/* </div> */}
                </div>
                <div className="small-box insurance-wrap" >
                    <button className="authorized-text-wrap"
                        style={{
                            backgroundColor: "white",
                            border: "none"
                        }}
                        onClick={AddDriver}>
                        <p className="px27">Add an authorized drive</p>
                    </button>
                </div>
            </div>
        </div >
    )
}