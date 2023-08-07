import React from 'react'
import './ServicesCart.css'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Badge from '@mui/material/Badge';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function ServicesCart() {
    return (
        <div className="servicescart">
            <div className="servicescart__section">
                <div className="servicescart__items">
                    <h3 className="servicescart__items__heading">
                        Items in cart
                    </h3>

                    <div className="servicescart__items__lists"></div>
                    
                </div>
                
                <div className="servicescart__items__checkout">
                    <div className="servicescart__items__checkout__btn">
                        <Badge badgeContent={8} color="error">
                            <ShoppingBagIcon className="shoppingbag__icon" />
                        </Badge>
                        <p>Rs 42.84</p>
                    </div>

                    <div className="servicescart__items__checkout__view__cart__btn">
                        <p>VIEW CART</p>
                        <ArrowRightAltIcon className="cartnext__icon" />
                    </div>
                    
                    
                    
                    
                </div>
            </div>
        </div>
    )
}

export default ServicesCart
