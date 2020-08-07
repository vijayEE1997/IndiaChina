import Home from "./Sidebar/Home";
import Notification from "./Sidebar/Notification";
import TradeI from "./Sidebar/Trade_I";
import TariffM from "./Sidebar/Tariff_M";
import NonTariffM from "./Sidebar/NonTariff_M";
import Commodity from "./Sidebar/Commodity";
import CaseS from "./Sidebar/Case_S";
import Blog from "./Sidebar/Blog";
import Report from "./Sidebar/Report";
import React from "react";
import {Route} from 'react-router-dom'
const Page=(props)=>{
        return (
            <div  style={{width:props.width}} className="page">
                <Route exact strict path="/" component={Home}/>
                <Route exact strict path="/notification" component={Notification}/>
                <Route exact strict path="/trade_i" component={TradeI}/>
                <Route exact strict path="/tariff_m" component={TariffM}/>
                <Route exact strict path="/nontariff_m" component={NonTariffM}/>
                <Route exact strict path="/commodity" component={Commodity}/>
                <Route exact strict path="/case_s" component={CaseS}/>
                <Route exact strict path="/blog" component={Blog}/>
                <Route exact strict path="/report" component={Report}/>
            </div>
        );
    }

export default Page;
