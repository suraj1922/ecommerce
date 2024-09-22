import sideBanner from "../../../images/banner2.jpg"
import { IoIosArrowRoundForward } from "react-icons/io"
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {  Navigation } from "swiper/modules";
import ProductItem from "../../ProductItem";
import Button from '@mui/material/Button'

const Home = () => {

    return (
        <>
            {/* <HomeBanner/> */}
            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img src={sideBanner} alt="" className="cursor w-100" />
                            </div>
                        </div>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-item-center">
                                <div className="info w-75 ">
                                    <h3 className="mb-0 hd">BEST SELLER</h3>
                                    <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">View all<IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                                <Swiper
                                    silderPerView={3}
                                    spaceBetween={10}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[ Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <ProductItem/>      
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>      
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>      
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>      
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>      
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem/>      
                                    </SwiperSlide>      
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Home