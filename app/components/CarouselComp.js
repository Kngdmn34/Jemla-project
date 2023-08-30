'use client'

import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function CarouselComp() {

    return (

        <>
            <div className="max-w-[1200px] mx-auto pt-6">
                    <Carousel showArrows={false} autoPlay={true} interval={5000} infiniteLoop={true} showThumbs = {false}>
                        <div>
                            <img src = '/images/banner/1.png'/>
                        </div>
                        <div>
                            <img src = '/images/banner/2.png'/>
                        </div>
                        <div>
                            <img src = '/images/banner/3.png'/>
                        </div>
                    </Carousel>
            </div>
        </>
    )
}