import { useState } from 'react';
import Showreel from '../Showreel/Showreel';
import './Circle.css';


function Circle() {

    const [x, isX] = useState(0);
    const [y, isY] = useState(0);

    const handleMouseMove = (e) => {
        isX(e.pageX / window.innerWidth);
        isY(e.pageY / window.innerWidth);
    };

    return (
        <section className="section-circle" onMouseMove={handleMouseMove}>
            <div className="circle"></div>
            <span className="circle-text" style={{
                transform: `translate(${x * 25}px, ${y * 25}px)`
            }} >full-cycle event agency</span>
            <Showreel />
        </section>
    );
}

export default Circle;
