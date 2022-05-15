import Footer from '../footer/Footer'
import Header from '../header/Header'
import Tour from '../tours/Tours'

const tours = require('../../data/db.json')

export default function Home(){
    return(
        <>
        <Header/>
        {tours.map(dest => {
        return <Tour
            name = {dest.name}
            img = {dest.image}
            />
        })}
        <Footer/>
        </>
    )
}