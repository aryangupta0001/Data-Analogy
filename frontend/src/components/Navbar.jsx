import './Navbar.css';

// components/Navbar.jsx
export default function Navbar() {
    return (
        <div id='navbar' className="flex nav pad w100">
            <div id='logo' className="max-h-fit-content">Data Analogy</div>

            <div id='navLinks' className="w50 flex space-between max-h-fit-content">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Our Work</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>
            <button className="max-h-fit-content">
                Get in Touch
            </button>
        </div>
    );
}
