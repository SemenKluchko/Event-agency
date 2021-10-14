import { useState } from 'react';
import './Page.css';
import Marquee from 'react-double-marquee';
import Dropright from '../Dropright/Dropright';
import Circle from '../Circle/Circle';




function Page() {
    const [scroll, isScrolling] = useState(false);
    const handleWheel = (e) => {
        isScrolling(e.pageX / 250 % Math.PI);
        console.log(scroll);
    };
    return (
        <div className="wrapper" onWheel={handleWheel}>
            <div className="marquee-one">
                <Marquee scrollWhen="always">FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</Marquee>
            </div>
            <div className="marquee-two">
                <Marquee scrollWhen="always">FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</Marquee>
            </div>
            <header className="header">
                <nav className="nav">
                    <Dropright />
                    <div className="logo">
                        <span className="logo-text">logo</span>
                    </div>
                </nav>
            </header>
            <main className="main">
                <Circle wheel={scroll} />
            </main>
            <aside className="aside-one">
                <span className="aside-text-one">where?</span>
            </aside>
            <aside className="aside-two">
                <span className="aside-text-two">what?</span>
            </aside>
            <footer className="footer">
                <span className="footer-text">who?</span>
            </footer>
        </div >
    );
}

export default Page;
