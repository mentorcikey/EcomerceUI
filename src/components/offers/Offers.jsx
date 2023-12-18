import React from 'react'

import "./offers.css"
import dataHero from "../../assets/data_hero"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

function Offers() {

    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                {
                    dataHero.map((item, index) => {
                        return <SwiperSlide key={index}>
                            <div className='offers'>
                                <div className='offers-left'>
                                    <h1>Exclusive</h1>
                                    <h1>Offers For You</h1>
                                    <p>ONLY ON BEST SELLERS PRODUCTS</p>
                                    <button>Check Now</button>
                                </div>
                                <div className='offers-right'>
                                    <img src={item.image} alt="excluiveImage" />
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </>
    )
}

export default Offers