import React from 'react'

import "../styles/shop.css"
import Hero from "../components/hero/Hero.jsx"
import Popular from '../components/popular/Popular.jsx'
import Offers from '../components/offers/Offers.jsx'
import NewCollections from '../components/newCollections/NewCollections.jsx'
import NewsLetter from '../components/newsLetter/NewsLetter.jsx'
import Footer from '../components/footer/Footer.jsx'

function Shop() {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Shop