import React from 'react'
import MobileHeader from '../../components/MobileHeader/MobileHeader'
import ServicesCarousel from '../../components/ServicesCarousel/ServicesCarousel'
import ServicesCart from '../../components/ServicesComponents/ServicesCart/ServicesCart'
import ServicesLists from '../../components/ServicesComponents/ServicesLists/ServicesLists'
import ServicesMenu from '../../components/ServicesComponents/ServicesMenu/ServicesMenu'
import TopHeader from '../../components/TopHeader/TopHeader'
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "react-bottom-drawer";

import './Services.css'
const Services = () => {
    const [isVisible, setIsVisible] = React.useState(false);
  const openDrawer = React.useCallback(() => setIsVisible(true), []);
  const closeDrawer = React.useCallback(() => setIsVisible(false), []);
  
  
    return (
        <div className="servicespage">
            <TopHeader className="servicespage__topheader" />  
            <MobileHeader className="servicespage__mobileheader" carousel={<ServicesCarousel />}  />
            
            <div className="services__container">
                <div className="services__menus">
                    <ServicesMenu />
                </div>
                <div className="services__lists">
                    <ServicesLists />
                </div>
                <div className="services__cart">
                    <ServicesCart />
                </div>
            </div>

            <div className="servicespage__bottom__menu">
                <div className="servicespage__bottom__menu__items" onClick={openDrawer}>
                    <MenuIcon className="servicespage__bottom__menu__items__collapse__icon" />
                    <p>Services</p>
                </div>
                
            </div>

            <Drawer
                duration={250}
                hideScrollbars={true}
                onClose={closeDrawer}
                isVisible={isVisible}
            >
            <div className="servicespage__bottom__menu__content">
                <a href=""><p>Recommended</p></a>
                <a href="#Weekday Combos"><p> Weekday Combos</p></a>
                <a href="#Kids Combos"><p>Kids Combos</p></a>
                <a href="#Kids Activities"><p>Kids Activities</p></a>
                <a href="#Womens Combos"><p>Women Combos</p></a>
                
            </div>
            </Drawer>
        </div>
    )
}

export default Services
