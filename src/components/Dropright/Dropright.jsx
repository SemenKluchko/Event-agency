import './Dropright.css';


function Dropright() {


    return (
        <div className="menu-wrapper">
            <div className="dropright">
                <button className="language-button">
                    <span className="emoji">&#128069;</span>
                </button>
                <ul className="dropright-content">
                    <li className="language-item-1">en</li>
                    <li className="language-item-2">ua</li>
                    <li className="language-item-3">ru</li>
                </ul>
            </div>
        </div>

    );
}

export default Dropright;
