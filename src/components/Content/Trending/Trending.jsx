import React from 'react';
import s from "@/components/Content/Content.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Scrollbar} from "swiper/modules";
import movies from "@/data/data.json";
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/scrollbar';
import "./mySwiper.css"

function Trending(props) {
    return (
        <div className={s.trendingBlock}>
            <h2>Trending Now</h2>
            <div className={s.carousel}>
                <Swiper
                    modules={[ Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={8}
                    scrollbar={{ draggable: true }}
                >
                    {props.trendingMovies?.map((movie) => {
                        return (
                            <div key={movie.Id + Math.random()} className={s.movie} >
                                <SwiperSlide onClick={() => {

                                    props.setFeaturedMovie(movies["TrendingNow"].filter((m) => {
                                        return m.Id === movie.Id
                                    })[0])
                                    props.setVideoPlayStatus(false)
                                    localStorage.setItem("movie",JSON.stringify(movies["TrendingNow"].filter((m) => {
                                        return m.Id === movie.Id
                                    })[0]))
                                } }>
                                    <Image src={`/images/${movie.CoverImage}`}  fill alt={movie.Title} />
                                </SwiperSlide>
                            </div>


                        )
                    })}
                </Swiper>

            </div>
        </div>
    );
}

export default Trending;