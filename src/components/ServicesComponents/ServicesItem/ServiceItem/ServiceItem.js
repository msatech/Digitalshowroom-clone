import React from 'react'
import './ServiceItem.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const  ServiceItem = ({name, price, desc, topitem}) => {
    return (
        
        <div className="single__serviceitem">
            <div className="single__serviceitem__service__info">
                <p className="single__serviceitem__service__info__title">
                    {name}
                </p>
                <p className="single__serviceitem__service__info__price">
                    ₹ {price}
                </p>
                <p className="single__serviceitem__service__info__desc">
                    {desc}
                </p>

            </div>
            <div className="single__serviceitem__service__add__cart">
                {/* <button className="single__serviceitem__service__add__cart__item__in__cart"> <RemoveIcon />  ADD <AddIcon /> </button> */}
                <button className="single__serviceitem__service__add__cart__no__item__in__cart">   ADD  </button>
            </div>
        </div>
    )
}

export default ServiceItem
