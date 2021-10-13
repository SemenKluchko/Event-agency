import React, { useEffect, useRef } from "react";
import './Showreel.css';
import CircleType from "circletype";

function Showreel(props) {
    const circleInstance = useRef();

    useEffect(() => {
        new CircleType(circleInstance.current).radius(63);
    }, []);


    return (
        <div className="showreel-circle" ref={circleInstance} style={{
            transform: `rotate(${props.wheel + 20}deg)`
        }} > showreel showreel showreel
        </div >
    )
}

export default Showreel;
