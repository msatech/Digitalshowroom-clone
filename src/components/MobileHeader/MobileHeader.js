import React from 'react'
import './MobileHeader.css'
import SearchIcon from '@mui/icons-material/Search';



const MobileHeader = ({carousel}) => {
    
    return (
        <div className="mobileheader">
            
            
            <div className="mobileheader__logo__section"  >
                <div className="mobileheader__logo__section__logo">
                    <img src="https://cdn.dotpe.in/logo/6006/eod-adventure-park-logo.png" alt="" />
                    <div className="mobileheader__logo__section__logo__name">
                        <p className="brand__name">EOD</p>
                        <p className="full_brand__name">e-o-d Adventure park</p>
                    </div>
                </div>
                <div className="mobileheader__logo__section__button">
                        <button>Delivery</button>
                </div>
            </div>

            {/* Search Section */}

            <div className="mobileheader__search__section">
                <div className="searchbox">
                    <SearchIcon className="searchbox__icon" />
                    <input type="text" className="search__field" placeholder="Search Services ..." />

                </div>
            </div>

            <div className="mobileheader__banner__section">
                {carousel}
            </div>

            

            
            
        </div>
    )
}

export default MobileHeader
