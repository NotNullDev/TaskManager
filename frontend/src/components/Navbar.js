import { MdMenu } from "react-icons/md";
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <header>
            <h1 style={{ cursor: "default" }}><Link to="/" className="header-link">Work manager</Link></h1>
            <MdMenu style={{ fontSize: 36, cursor: "pointer" }} />
        </header>
    )
}

export default Navbar;