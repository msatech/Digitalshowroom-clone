import React from 'react'
import './ServicesCarousel.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function ServicesCarousel() {
    const options = {
		loop:true,
		
		autoplay:true,
		autoplayTimeout:6000,
		nav:false,
		dots:false,
		lazyLoad:true,
		animateOut:true,
		responsive:
		{
		0:{items:1},
		575:{items:1},
		768:{items:1},
		991:{items:1},
		1199:{items:1}
		}
	}

    return (
        <div className="servicescarousel">
            <OwlCarousel  {...options} className='owl-theme'  nav>

                <div class='item'>
                    <img src="https://cdn.dotpe.in/reports/store/11922/promo-banner/2HJKNUWUI3C3E88J5U" alt="services-banner" />
                </div>
                <div class='item'>
                    <img src="https://inetbusinesshub.com/images/logo-design-banner.jpg" alt="services-banner2" />
                </div>

            </OwlCarousel>
        </div>
    )
}

export default ServicesCarousel
