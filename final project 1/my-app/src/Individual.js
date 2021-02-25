import './Individual.css'
import insurance from './photos/icon-photo/Group-411@2x.png'
import house from './photos/icon-photo/house-24px.svg'
import auto from './photos/icon-photo/Group-410@2x.png'
import car from './photos/icon-photo/drive_eta-24px.svg'
import travel from './photos/icon-photo/Group-409@2x.png'
import health from './photos/icon-photo/marcelo-leal-k7ll1hpdhFA-unsplash@2x.png'
import plane from './photos/icon-photo/flight-24px.svg'
import care from './photos/icon-photo/Group-147.svg'
import bank from './photos/icon-photo/Group-408@2x.png'
import other from './photos/icon-photo/Group-407@2x.png'

export default function Individual() {

    return (
        <div>
            <h1 style={{ fontFamily: 'Montserrat' }} className="center">INDIVIDUAL</h1>
            <p style={{ fontFamily: 'Montserrat' }} className="center">Alpha offers a variety of products to insure your property and liability. In order to get the terms that suit you best, contact your agent.</p>
            <div className="container">
                <div className="individual-container">
                    <a href="" className="decoration">
                        <div className="img-container">
                            <div className="img-size" style={{ backgroundImage: `url(${insurance})` }}>
                                <img src={house} className="icon"></img>
                            </div>
                            <h2 style={{ fontFamily: 'Montserrat' }} className="decoration">PROPERTY INSURANCE</h2>
                        </div>
                    </a>
                    <a href="" className="decoration">
                        <div className="img-container">
                            <div className="img-size" style={{ backgroundImage: `url(${auto})` }}>
                                <img src={car} className="icon"></img>
                            </div>
                            <h2 style={{ fontFamily: 'Montserrat' }} className="decoration">PROPERTY INSURANCE</h2>
                        </div>
                    </a>
                    <a href="" className="decoration">
                        <div className="img-container">
                            <div className="img-size" style={{ backgroundImage: `url(${travel})` }}>
                                <img src={plane} className="icon"></img>
                            </div>
                            <h2 style={{ fontFamily: 'Montserrat' }} className="decoration">PROPERTY INSURANCE</h2>
                        </div>
                    </a>
                    <a href="" className="decoration">
                        <div className="img-container">
                            <div className="img-size" style={{ backgroundImage: `url(${health})` }}>
                                <img src={care} className="icon"></img>
                            </div>
                            <h2 style={{ fontFamily: 'Montserrat' }} className="decoration">PROPERTY INSURANCE</h2>
                        </div>
                    </a>
                    <a href="" className="decoration">
                        <div className="img-container">
                            <div className="img-size" style={{ backgroundImage: `url(${bank})` }}>
                            </div>
                            <h2 style={{ fontFamily: 'Montserrat' }} className="decoration">PROPERTY INSURANCE</h2>
                        </div>
                    </a>
                    <a href="" className="decoration">
                        <div className="img-container">
                            <div className="img-size" style={{ backgroundImage: `url(${other})` }}>
                            </div>
                            <h2 style={{ fontFamily: 'Montserrat' }} className="decoration">PROPERTY INSURANCE</h2>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}