import { Link } from "react-router-dom";
import Insurance from "./Insurance"

export default function AddDriver() {

    function back() {
        let addDriver = document.querySelector("#add-driver");
        addDriver.style.display = "none"
        let background = document.querySelector(".img");
        let steps = document.querySelector(".partial-steps-wrap");
        let third = document.querySelector("#div-third");
        steps.style.filter = "blur(0px)"
        background.style.filter = "blur(0px)"
        third.style.filter = "blur(0px)"
        document.body.style.overflowY = "visible"
    }

    function save() {
        let btn = document.querySelector("#save");
        let inputId = document.querySelector("#ID");
        let inputName = document.querySelector("#name");
        let inputLastname = document.querySelector("#lastname");
        let inputDateOfBirth = document.querySelector("#dateOfBirth");
        let box = document.querySelector("#add-driver-box");


        btn.addEventListener('click', () => {
            let div = document.createElement("div");
            div.classList.add("authorized-text-wrap");
            div.classList.add("insurance-wrap");
            div.style.width = "95%";
            div.style.paddingLeft = "5%";
            let pName = document.createElement('p');
            let pDate = document.createElement('p');
            let pId = document.createElement('p');
            pName.classList.add("px27");
            pDate.classList.add("authorized-p");
            pId.classList.add("authorized-p");



            let valueId = inputId.value;
            let valueName = inputName.value;
            let valueLastname = inputLastname.value;
            let valueDateOfBirth = inputDateOfBirth.value;

            pName.textContent = valueName + " " + valueLastname;
            pDate.textContent = valueDateOfBirth;
            pId.textContent = valueId;


            box.appendChild(div);
            div.appendChild(pName);
            div.appendChild(pId);
            div.appendChild(pDate);
        })
        let addDriver = document.querySelector("#add-driver");
        addDriver.style.display = "none"
        let background = document.querySelector(".img");
        let steps = document.querySelector(".partial-steps-wrap");
        let third = document.querySelector("#div-third");
        steps.style.filter = "blur(0px)"
        background.style.filter = "blur(0px)"
        third.style.filter = "blur(0px)"
        document.body.style.overflowY = "visible"
        box.style.display = "flex";
    }
    return (
        <div id="add-driver" style={{ display: "none" }} className="">
            <div className="insurance-box insurance-wrap add-driver-background" style={{ position: "absolute" }}>
                <Link to={"/personal/auto-insurance/buy"} className="close" onClick={back}></Link>
                <p style={{ marginBottom: "4%", marginTop: "3%" }} >Add the driver</p>
                <div className="input-wrap width-30" style={{ marginBottom: "3%" }} id="wrap-input" id="m-f">
                    <label className="input-container">
                        <input type="radio" name="complete" /> Male
                    <span class="checkmark"></span>
                    </label>
                    <label className="input-container">
                        <input type="radio" name="complete" /> Female
                    <span class="checkmark" ></span>
                    </label>
                </div>
                <div className="input-wrap insurance-personal-width" >
                    <div id="div">
                        <p className="p-driver">ID</p>
                        <form>
                            <input type="text" name="complete" className="partial-steps personal-input text" id="ID" />
                        </form>
                    </div>
                    <div style={{ width: "50%" }}>
                        <p className="p-driver">Date of Birth</p>
                        <input type="date" name="complete" className="partial-steps personal-input text" id="dateOfBirth" />
                    </div>
                </div>
                <div className="input-wrap insurance-personal-width">
                    <div >
                        <p className="p-driver">Name</p>
                        <input type="text" name="complete" className="partial-steps personal-input text" id="name" />
                    </div>
                    <div >
                        <p className="p-driver" style={{ width: "50%" }}>Lastname</p>
                        <input type="text" name="complete" className="partial-steps personal-input text" id="lastname" />
                    </div>
                </div>
                <p className="review-size">*If you do not have a driver's license, choose another person who you want to be an authorized driver of your policyholder vehicle</p>
                <div className="btn-position">
                    <button className="btn-style"
                        to={"/personal/auto-insurance/buy"}
                        style={{
                            marginBottom: "7%",
                            color: "#E84F5B",
                            backgroundColor: "white",
                            border: "1px solid #E84F5B"
                        }}
                        id="save"
                        onClick={save}>Save</button>
                </div>
            </div >
        </div>
    )
}