import Footer from '../footer/Footer'
import Header from '../header/Header'
import Tours from '../tours/Tours'

const tours = require('../../data/db.json')

export default function Home(){
    return(
        <>
        <Header />
        <Tours data = {tours}/>
        <Footer/>
        </>
    )
}