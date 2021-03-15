import "../Personal-cabnet/Personal.css"
import alpha from "../photos/icon-photo/3.svg"
import conditions from "../photos/icon-photo/Group-338.svg"
import agreements from "../photos/icon-photo/Group-339.svg"
import tarrif from "../photos/icon-photo/Group-337.svg"


export default function Automobile() {
    return (
        <div id="automobile">
            <div style={{
                color: "#5C656B",
                backgroundColor: "white",
                width: "90%",
                marginLeft: "5%",
                borderRadius: 5,
                boxShadow: "1px 1px #888888",
                paddingBottom: "1%",
                marginBottom: "2%"
            }}>
                <div className="row">
                    <img src={alpha}></img>
                    <p style={{
                        color: "#E84F5B",
                        fontFamily: "FiraGO",
                        textAlign: "center"
                    }}>AUTOMOBILE INSURANCE</p>
                    <p style={{
                        color: "#E84F5B",
                        fontFamily: "FiraGO",
                        textAlign: "center",
                        fontSize: 20
                    }}>^</p>
                </div>
                <div style={{ width: "85%", marginLeft: "7.5%", }}>
                    <p style={{
                        textAlign: "center",
                        fontFamily: "Monserrat"
                    }}
                    >While driving the road is full of surprises. You can protect your finances and use 24 hours auto assistant by insuring your car. In case of a car accident, car insurance will help you to repair or change damaged parts of the car and give you the opportunity to return to your normal life in the shortest time.</p>
                </div>
            </div>
            <div style={{
                color: "#5C656B",
                backgroundColor: "white",
                width: "90%",
                marginLeft: "5%",
                borderRadius: 5,
                boxShadow: "1px 1px #888888",
                paddingBottom: "1%",
                marginBottom: "2%"
            }}>
                <div className="row">
                    <img src={alpha}></img>
                    <p style={{
                        color: "#E84F5B",
                        fontFamily: "FiraGO",
                        fontSize: 14,
                        textAlign: "center"
                    }}>WE INSURE ALL TYPES OF VEHICLES</p>
                    <p style={{
                        color: "#E84F5B",
                        fontFamily: "FiraGO",
                        textAlign: "center"
                    }}>^</p>
                </div>
                <div style={{ width: "85%", marginLeft: "7.5%", }}>
                </div>
            </div>
            <div style={{
                color: "#5C656B",
                backgroundColor: "white",
                width: "90%",
                marginLeft: "5%",
                borderRadius: 5,
                boxShadow: "1px 1px #888888",
                paddingBottom: "1%",
                marginBottom: "2%"
            }}>
                <div className="row">
                    <img src={alpha}></img>
                    <p style={{
                        color: "#E84F5B",
                        fontFamily: "FiraGO",
                        textAlign: "center"
                    }}>WHAT DOES MOTOR INSURANCE COVER</p>
                    <p style={{
                        color: "#E84F5B",
                        fontFamily: "FiraGO",
                        textAlign: "center"
                    }}>^</p>
                </div>
                <div style={{ width: "85%", marginLeft: "7.5%", }}>
                </div>
            </div>
            <div className="font-display" style={{ textAlign: "center", marginBottom: "2%" }}>
                <div style={{ marginRight: "5%" }}>
                    <img src={conditions}></img>
                    <p className="font-design">conditions</p>
                </div>
                <div style={{ marginRight: "5%" }}>
                    <img src={agreements}></img>
                    <p className="font-design">agreements</p>
                </div>
                <div style={{ marginRight: "5%" }}>
                    <img src={tarrif}></img>
                    <p className="font-design">tarrif</p>
                </div>
            </div>
        </div>
    )
}