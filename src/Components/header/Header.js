import { Link } from "react-router-dom";
import './Header.css';
export default function Header (props)
{
    return (
        <>
        <nav id='home'>
        <Link to="/"> Take Me Home </Link>
        <h1 id='head'>Premium choice</h1>
        </nav>
        </>
    );
}
