export default function Tour(props){
    return(
        <div>
            <h2>{props.name}</h2>
            <img src={props.img} alt={props.name}/>
            <hr/>
        </div>
    )
}