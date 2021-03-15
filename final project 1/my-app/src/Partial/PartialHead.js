import partial from "../photos/icon-photo/pexels-photo@2x.png"
import "./Partial.css"

export default function PartialHead() {

    return (
        <div>
            <div style={{ backgroundImage: `url(${partial})`, marginTop: 0 }} className="img div-place partial-height">
                <div className="div-flex" style={{ justifyContent: "flex-start" }}>
                    <div className="small-margin"><p className=" partial-direction">Home> personal> Auto insurance> buy</p></div>
                    <div className="h1 partial-box small-margin" >
                        <p className="font-size partial-box-p" style={{ fontFamily: 'Montserrat' }} id="ind-p">
                            CAR INSURANCE - PARTIAL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
