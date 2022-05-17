import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './TourDetails.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import data from "../../data/db.json";
import Button from 'react-bootstrap/Button';

export default function TourDetails(props) {
    let { id } = useParams();
    let result = data.filter(city => city.id === id)

    const [check, setlogged] = useState(false);
    function handleLogIn() {
        setlogged(!check);
    }
    return (
        <>
            <div key={result[0].id}>
            <Header />
                <img id="imaging" src={result[0].image} alt={result[0].name} />
                <ul>
                    <h2 id="dest"> Destination : {result[0].name} </h2>
                    <h3> Cost : {'JOD '+result[0].price} / Person</h3>
                    <hr />
                    <p id='info'> Info : {!check && result[0].info.substring(0, 50).concat()}
                        {check && result[0].info} <br/><Button id="btn" variant="info" onClick={handleLogIn}>{check ? "see less" : "see more"}</Button></p>
                </ul>
                <hr/>
                <Footer />
            </div>
        </>
    );
}