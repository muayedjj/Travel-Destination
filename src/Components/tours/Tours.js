import './Tours.css';
import { Link } from 'react-router-dom';
export default function Tours(props) {
    return (
        <>
            {
                props.data.map(city => {
                    return (
                        <Link to={`/city/${city.id}`} key={city.id} >
                            <div className='card'>
                                <h3 className='title'>{city.name} Trip price {city.price}$</h3>
                                <img src={city.image} alt="Distination Image"></img>
                            </div>
                        </Link>)
                })
            }
            <hr />
        </>
    )
}
{/* <h2>{props.name}</h2>
<img src={props.img} alt={props.name}/> */}