import React from "react";
import Comparision from "./Home/Comparision";
import BilateralTrade from "./Home/BilateralTrade";
import TA from './Home/TA';
import TB from './Home/TB';
import TI from './Home/TI';
import Footer from "./Home/Footer";
function Home() {
    return (
        <React.Fragment>
            <div className="page-home-heading">
                <h1>India-China Trade Dashboard</h1>
            </div >
            <div className="page-home-description">
                <p>Arthashastra Intelligence is offering three flagship internship programmes in the
                    areas of economics , finance and Tech. Arthashastra Intelligence is a startup focussing on economic
                    and financial intelligence. Gain expertise in programming and quant in the real world applications of
                    Finance and Economics. We currently have internship for following roles:
                    Arthashastra Intelligence is offering three flagship internship programmes in the
                    areas of economics , finance and Tech. Arthashastra Intelligence is a startup focussing on economic
                    and financial intelligence. Gain expertise in programming and quant in the real world applications of
                    Finance and Economics. We currently have internship for following roles:
                </p>
            </div>
            <div className="page-home-comp-heading">
                <h1 align="center">India and China with World: Trade at a Glance</h1>
            </div>
            <Comparision/>
            <BilateralTrade/>
            <TI/>
            <TB/>
            <TA/>
            <Footer/>
        </React.Fragment>
    )
}
export default Home;
