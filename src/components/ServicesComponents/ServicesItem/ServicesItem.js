import React from 'react'
import ServiceItem from './ServiceItem/ServiceItem'
import './ServicesItem.css'
const ServicesItem = ({ title }) => {
    return (
        <div className="servicesitem" id={title}>
            <h2>{title}</h2>
            <ServiceItem name="Weekday Combos" price="300" desc="The Ultimate Combo is the BEST ticket @e-o-d. It has access to Bowling (2 Games)," topitem="true" />

            <ServiceItem name="Boating" price="50" desc="" topitem="true" />

            <ServiceItem name="Bowling" price="150" desc="" topitem="true" />

            


            
            
        </div>
    )
}

export default ServicesItem
