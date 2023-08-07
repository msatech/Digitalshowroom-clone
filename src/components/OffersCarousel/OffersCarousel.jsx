import React from 'react'
import './OffersCarousel.css'
import Drawer from "react-bottom-drawer";
import OffersDrawer from './OffersDrawer/OffersDrawer';


function OffersCarousel() {

    const [isOfferVisible, setIsOfferVisible] = React.useState(false);
    const openOffersDrawer = React.useCallback(() => setIsOfferVisible(true), []);
    const closeOffersDrawer = React.useCallback(() => setIsOfferVisible(false), []);

    return (
        <div className="offerscarousel">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/halloween-offer-banner-997852.png" onClick={openOffersDrawer} alt="offers img" />
            
            <Drawer
                duration={250}
                hideScrollbars={true}
                onClose={closeOffersDrawer}
                isVisible={isOfferVisible}
            >
            <OffersDrawer />
            </Drawer>
        </div>
    )
}

export default OffersCarousel
