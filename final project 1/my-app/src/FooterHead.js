import Download from './photos/icon-photo/pexels-photo-225232@2x.png'
import apple from './photos/icon-photo/iconfinder_16-apple_104490 (1).svg'
import android from './photos/icon-photo/iconfinder_36-android_104471 (1).svg'


function FooterHead() {
    return (
        <div style={{ backgroundImage: `url(${Download})`, height: "310px" }} className="img div-place">
            <div className="div-flex" style={{ flexDirection: "row" }}>
                <div className="h1-footer" style={{ alignSelf: "flex-start" }}>
                    <p style={{ fontFamily: 'Montserrat', fontSize: "32px" }}>
                        Download free for iPhone & Android</p>
                    <hr className="hr" />
                    <p style={{ fontFamily: 'FiraGO', fontSize: "25px" }}>To help provide the best possible experience</p>
                </div>
                <div className="link-container">
                    <div className="div-link" style={{ marginBottom: "20%" }}>
                        <img src={apple} ></img>
                        <div className="align-text">
                            <p style={{ fontFamily: "FiraGO", fontSize: "10px", margin: "0" }}>Download from</p>
                            <p style={{ fontFamily: "FiraGO", fontSize: "18px", margin: "0" }}>App Store</p>
                        </div>
                    </div>
                    <div className="div-link">
                        <img src={android} ></img>
                        <div className="align-text">
                            <p style={{ fontFamily: "FiraGO", fontSize: "10px", margin: "0" }}>Download from</p>
                            <p style={{ fontFamily: "FiraGO", fontSize: "18px", margin: "0" }}>Play Store</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterHead;