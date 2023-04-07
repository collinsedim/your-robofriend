import React from "react";
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div style={{ 
            overflowY: 'scroll', 
            border: '2px solid black', 
            borderRadius: '4px',
            height: '700px'
            }}>
            {props.children}
        </div>
    )
};

export default Scroll;