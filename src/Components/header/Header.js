import { Link } from "react-router-dom";

export default function Header (props)
{
    return (
        <>
        <nav id='NAV'>
        <Link to="/"> Home </Link>
        <h1 id='head'>Premium choice</h1>
        </nav>
        </>
    );
}
