import React from 'react';

const Slider=(props)=>{
        return (
            <div className="sidebar-slider">
                <svg  onClick={props.click} width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-caret-right-square" fill="#000000">
                    <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                </svg>
            </div>
        );
}

export default Slider;
