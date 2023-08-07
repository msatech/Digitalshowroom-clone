import React from 'react'
import OffersCarousel from '../../OffersCarousel/OffersCarousel'
import ServicesCarousel from '../../ServicesCarousel/ServicesCarousel'
import ServicesItem from '../ServicesItem/ServicesItem'
import './ServicesLists.css'
function ServicesLists() {

    
    return (
        <div className="serviceslist">
            <div className="serviceslist__carousel">
                <ServicesCarousel  />
            </div>
            <div className="serviceslist__offerscarousel">
                <OffersCarousel />
            </div>
            <ServicesItem  className="serviceslist__services__items" title="Weekday Combos" />
            <ServicesItem  className="serviceslist__services__items" title="Kids Combos" />
            <ServicesItem  className="serviceslist__services__items" title="Womens Combos" />
            <ServicesItem  className="serviceslist__services__items" title="Kids Activities" />
        </div>
    )
}

export default ServicesLists
