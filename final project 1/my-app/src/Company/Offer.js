import company from "../photos/icon-photo/pexels-photo-2977565@2x.png"

export default function Offer() {

    return (
        <div style={{ backgroundImage: `url(${company})`, marginTop: 0 }} className="img div-place">
            <div className="div-flex" style={{ justifyContent: "flex-start" }}>
                <div style={{ marginTop: "15%" }}><p>Home> Individual> Auto</p></div>
                <div className="h1" style={{ marginTop: "10%" }}>
                    <p style={{ fontFamily: 'Montserrat', fontSize: "32px" }}>
                        We offer  a full range of insurance products</p>
                    <hr className="hr" />
                    <p style={{ fontFamily: 'FiraGO', fontSize: "18px" }}>The insurance company Alpha is a subsidiary of Medical Holding Aversi.</p>
                </div>
            </div>
        </div>
    )
}