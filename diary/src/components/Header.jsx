import "./Header.css"
import Button from "../components/Button"

function Header({leftChild, title, rightChild}) {
    return (
        <header className="Header">
            <div className="header_left">{leftChild}</div>
            <div className="header_center">{title}</div>
            <div className="header_right">{rightChild}</div>
        </header>
    )
}

export default Header;