import React from 'react'
import './TopHeader.css';
// import SearchIcon from '@mui/icons-material/Search';
import AnimatedSearch from '../../AnimatedIcons/search.gif'
import AnimatedCart from '../../AnimatedIcons/cart.gif'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';



const TopHeader = () => {
    return (
        <div className="topheader">

            <div className="topheader__logo">
                <img src="https://cdn.dotpe.in/logo/6006/eod-adventure-park-logo.png" alt="" />
            </div>

            <div className="topheader__serch">
                <div className="search__box">
                    <img src={AnimatedSearch} alt="" className="animated__searchicon" />
                    <input type="text" className="search__field" placeholder="Search Services ..." />
                </div>
            </div>

            <div className="topheader__cart">
                <IconButton>
                    <ShoppingCartIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default TopHeader
