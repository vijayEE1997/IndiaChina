import React, {useState} from 'react';
import logo1 from "../img/ai.png";
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import Slider from "./Slider";

const Sidebar =(props)=>{
    const [sidebarClass,setSidebarClass]=useState(props.sidebar);
    const closeHandler=(e)=>{
        e.preventDefault()
        setSidebarClass("sidebar close")
        setTimeout(()=>{props.close()},1000)
    }
        return (
            <div className={sidebarClass}>
                <div className="sidebar-img">
                    <a href="/"><img src={logo1} alt="logo" /></a>
                    <Slider click={props.Open}/>
                </div>
                <div className="sidebar-content">
                    <ul>
                        <li><NavLink to="/" exact activeStyle={{color:"#109CF1"}}>
                            <svg width="2em" height="1em" viewBox="0 0 21 21" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5 10.1333C3.33431 10.1333 3.2 9.99902 3.2 9.83333V3.5C3.2 3.33431 3.33431 3.2 3.5 3.2H8.16667C8.33235 3.2 8.46667 3.33431 8.46667 3.5V9.83333C8.46667 9.99902 8.33235 10.1333 8.16667 10.1333H3.5ZM3.5 16.8C3.33431 16.8 3.2 16.6657 3.2 16.5V13.5C3.2 13.3343 3.33431 13.2 3.5 13.2H8.16667C8.33235 13.2 8.46667 13.3343 8.46667 13.5V16.5C8.46667 16.6657 8.33235 16.8 8.16667 16.8H3.5ZM11.8333 16.8C11.6676 16.8 11.5333 16.6657 11.5333 16.5V10.1667C11.5333 10.001 11.6676 9.86667 11.8333 9.86667H16.5C16.6657 9.86667 16.8 10.001 16.8 10.1667V16.5C16.8 16.6657 16.6657 16.8 16.5 16.8H11.8333ZM11.5333 3.5C11.5333 3.33431 11.6676 3.2 11.8333 3.2H16.5C16.6657 3.2 16.8 3.33431 16.8 3.5V6.5C16.8 6.66569 16.6657 6.8 16.5 6.8H11.8333C11.6676 6.8 11.5333 6.66569 11.5333 6.5V3.5Z" stroke="#000000" strokeWidth="1.8"/>
                            </svg>
                            Home</NavLink></li>
                    </ul>
                    <hr/>
                    <ul>
                        <li><NavLink to="/notification" activeStyle={{color:"#109CF1"}}>
                            <svg width="2em" height="1em" viewBox="0 0 21 21" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.50033 3.23H16.667C16.7309 3.23 16.8003 3.2882 16.8003 3.37333V8.43333C16.8003 8.51846 16.7309 8.57667 16.667 8.57667H2.50033C2.43644 8.57667 2.36699 8.51846 2.36699 8.43333V3.37333C2.36699 3.2882 2.43644 3.23 2.50033 3.23ZM2.50033 11.6633H16.667C16.7309 11.6633 16.8003 11.7215 16.8003 11.8067V16.8667C16.8003 16.9518 16.7309 17.01 16.667 17.01H2.50033C2.43644 17.01 2.36699 16.9518 2.36699 16.8667V11.8067C2.36699 11.7215 2.43644 11.6633 2.50033 11.6633Z" stroke="#000000" strokeWidth="1.8"/>
                            </svg>
                            Notification and Advisories</NavLink></li>
                        <li><NavLink to="/trade_i" activeStyle={{color:"#109CF1"}}>
                            <svg width="2em" height="1em" viewBox="0 0 21 21" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.50033 3.23H16.667C16.7309 3.23 16.8003 3.2882 16.8003 3.37333V8.43333C16.8003 8.51846 16.7309 8.57667 16.667 8.57667H2.50033C2.43644 8.57667 2.36699 8.51846 2.36699 8.43333V3.37333C2.36699 3.2882 2.43644 3.23 2.50033 3.23ZM2.50033 11.6633H16.667C16.7309 11.6633 16.8003 11.7215 16.8003 11.8067V16.8667C16.8003 16.9518 16.7309 17.01 16.667 17.01H2.50033C2.43644 17.01 2.36699 16.9518 2.36699 16.8667V11.8067C2.36699 11.7215 2.43644 11.6633 2.50033 11.6633Z" stroke="#000000" strokeWidth="1.8"/>
                            </svg>
                            Trade Indicators</NavLink></li>
                        <li><NavLink to="/tariff_m" activeStyle={{color:"#109CF1"}}>
                            <svg width="2em" height="1em" viewBox="0 0 21 21" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.50033 3.23H16.667C16.7309 3.23 16.8003 3.2882 16.8003 3.37333V8.43333C16.8003 8.51846 16.7309 8.57667 16.667 8.57667H2.50033C2.43644 8.57667 2.36699 8.51846 2.36699 8.43333V3.37333C2.36699 3.2882 2.43644 3.23 2.50033 3.23ZM2.50033 11.6633H16.667C16.7309 11.6633 16.8003 11.7215 16.8003 11.8067V16.8667C16.8003 16.9518 16.7309 17.01 16.667 17.01H2.50033C2.43644 17.01 2.36699 16.9518 2.36699 16.8667V11.8067C2.36699 11.7215 2.43644 11.6633 2.50033 11.6633Z" stroke="#000000" strokeWidth="1.8"/>
                            </svg>
                            Tariff Measures</NavLink></li>
                        <li><NavLink to="/nontariff_m" activeStyle={{color:"#109CF1"}}>
                            <svg width="2em" height="1em" viewBox="0 0 21 21" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.81154 6.11115C6.81154 4.34914 8.23842 2.92226 10.0004 2.92226C11.7624 2.92226 13.1893 4.34914 13.1893 6.11115C13.1893 7.87316 11.7624 9.30004 10.0004 9.30004C8.23842 9.30004 6.81154 7.87316 6.81154 6.11115ZM2.92266 14.8611C2.92266 14.4717 3.11218 14.0788 3.54765 13.6769C3.98788 13.2706 4.63116 12.9041 5.39842 12.5967C6.93407 11.9815 8.79002 11.6723 10.0004 11.6723C11.2108 11.6723 13.0668 11.9815 14.6025 12.5967C15.3697 12.9041 16.013 13.2706 16.4532 13.6769C16.8887 14.0788 17.0782 14.4717 17.0782 14.8611V17.0778H2.92266V14.8611Z" stroke="#000000" strokeWidth="1.8"/>
                            </svg>
                            Non-Tariff Measures</NavLink></li>
                        <li><NavLink to="/commodity" activeStyle={{color:"#109CF1"}}>
                            <svg width="2em" height="1em" viewBox="0 0 21 21" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                    <path d="M5.00033 14.3H4.71038L4.50535 14.505L2.36699 16.6434V3.33335C2.36699 2.80329 2.80359 2.36669 3.33366 2.36669H16.667C17.1971 2.36669 17.6337 2.80329 17.6337 3.33335V13.3334C17.6337 13.8634 17.1971 14.3 16.667 14.3H5.00033Z" stroke="#000000" strokeWidth="1.8"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            Commodity-wise Analysis</NavLink></li>
                        <li><NavLink to="/case_s" activeStyle={{color:"#109CF1"}}>
                            <svg width="2em" height="1em" viewBox="0 0 21 21" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.50033 3.23H16.667C16.7309 3.23 16.8003 3.2882 16.8003 3.37333V8.43333C16.8003 8.51846 16.7309 8.57667 16.667 8.57667H2.50033C2.43644 8.57667 2.36699 8.51846 2.36699 8.43333V3.37333C2.36699 3.2882 2.43644 3.23 2.50033 3.23ZM2.50033 11.6633H16.667C16.7309 11.6633 16.8003 11.7215 16.8003 11.8067V16.8667C16.8003 16.9518 16.7309 17.01 16.667 17.01H2.50033C2.43644 17.01 2.36699 16.9518 2.36699 16.8667V11.8067C2.36699 11.7215 2.43644 11.6633 2.50033 11.6633Z" stroke="#000000" strokeWidth="1.8"/>
                            </svg>
                            Case Studies</NavLink></li>
                    </ul>
                    <hr/>
                    <ul>
                        <li><NavLink to="/blog" activeStyle={{color:"#109CF1"}}>
                            <svg width="2em" height="1em" viewBox="0 0 21 21" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                    <path d="M5.00033 14.3H4.71038L4.50535 14.505L2.36699 16.6434V3.33335C2.36699 2.80329 2.80359 2.36669 3.33366 2.36669H16.667C17.1971 2.36669 17.6337 2.80329 17.6337 3.33335V13.3334C17.6337 13.8634 17.1971 14.3 16.667 14.3H5.00033Z" stroke="#000000" strokeWidth="1.8"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>Blog</NavLink></li>
                        <li><NavLink to="/report" activeStyle={{color:"#109CF1"}}>
                            <svg width="2em" height="1em" viewBox="0 0 21 21" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                    <path d="M5.00033 14.3H4.71038L4.50535 14.505L2.36699 16.6434V3.33335C2.36699 2.80329 2.80359 2.36669 3.33366 2.36669H16.667C17.1971 2.36669 17.6337 2.80329 17.6337 3.33335V13.3334C17.6337 13.8634 17.1971 14.3 16.667 14.3H5.00033Z" stroke="#000000" strokeWidth="1.8"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>Report</NavLink></li>
                    </ul>
                </div>
                <div onClick={closeHandler} className="sidebar-footer" >
                    <p align="center">
                        <svg  width="15" height="15" viewBox="0 0 14 14" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 0C0.895431 0 0 0.89543 0 2V12C0 13.1046 0.89543 14 2 14H12C13.1046 14 14 13.1046 14 12V2C14 0.895431 13.1046 0 12 0H2ZM5 2C4.44772 2 4 2.44772 4 3V11C4 11.5523 4.44772 12 5 12C5.55228 12 6 11.5523 6 11V3C6 2.44772 5.55228 2 5 2Z" fill="#C2CFE0"/>
                        </svg> Toggle Sidebar
                    </p>
                </div>
            </div>
        );
    }

export default Sidebar;
