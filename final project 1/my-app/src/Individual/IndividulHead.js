import car from "../photos/icon-photo/pexels-photo-1571783@2x.png"

export default function IndividualHead() {

    return (
        <div style={{ backgroundImage: `url(${car})`, marginTop: 0 }} className="img div-place">
            <div className="div-flex" style={{ justifyContent: "flex-start" }}>
                {/* <div><p>Home> Individual> Auto</p></div> */}
                <div className="h1" style={{ marginTop: "20%" }}>
                    <p style={{ fontFamily: 'Montserrat', fontSize: "32px" }}>
                        AUTO INSURANCE</p>
                    <hr className="hr" />
                    <p style={{ fontFamily: 'FiraGO', fontSize: "18px" }}>While driving the road is full of surprises. You can protect your finances.</p>
                </div>
            </div>
        </div>
    )
}
