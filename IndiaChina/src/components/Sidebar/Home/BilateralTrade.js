import React from "react";
import Btradel1 from "./Btradel1";
const data=[{"Year": 1996, "TE": 0.61472, "TI": 0.7568, "TD": -0.14208},
    {"Year": 1997, "TE": 0.71787, "TI": 1.11193, "TD": -0.39406},
    {"Year": 1998, "TE": 0.42711, "TI": 1.09658, "TD": -0.66947},
    {"Year": 1999, "TE": 0.53897, "TI": 1.28269, "TD": -0.74372},
    {"Year": 2000, "TE": 0.83123, "TI": 1.50199, "TD": -0.67076},
    {"Year": 2001, "TE": 0.95184, "TI": 2.036215, "TD": -1.08431}
];
function BilateralTrade() {
    return(
        <div className='page-home-btrade'>
            <div className="page-home-btrade-heading">
                <h2 align="center">BILATERAL TRADE: INDIA- CHINA</h2>
            </div>
            <div className="page-home-btrade-l">
                <div className="page-home-btrade-l-1">
                    <Btradel1 data={data}/>
                </div>
                <div className="page-home-btrade-l-2">
                    <p>News regarding India China relations Scrolling</p>
                </div>
            </div>
            <div className="page-home-btrade-r">
                <div>
                    <p>25</p>
                </div>
                <div>
                    <p>25</p>
                </div>
                <div>
                    <p>25</p>
                </div>
            </div>
        </div>
    )
}
export default BilateralTrade
