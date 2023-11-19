"use client"
import React, {useEffect, useState} from 'react';
import s from "./Content.module.css"
import movies from "../../data/data.json"
import {sortTrendingMovies} from "@/utils/helpFunctions/helpFunctions";
import Trending from "@/components/Content/Trending/Trending";
import Featured from "@/components/Content/Featured/Featured";

function Content() {
    let storage
    if(typeof window !== "undefined"){
        storage = localStorage.getItem("movie") ? JSON.parse(localStorage.getItem("movie"))  : movies["Featured"]
    }
    const [featuredMovie, setFeaturedMovie] =  useState(storage)
    const [trendingMovies,setTrendingMovies] = useState(null)
    const [videoPlayStatus, setVideoPlayStatus] = useState(false)
    const [isFirstRender, setIsFirstRender] = useState(true)

useEffect(() => {
    let changeStatus

    if(!isFirstRender){
        changeStatus = setTimeout(() => {
            setVideoPlayStatus(true)
        },2000)
    }

    else {
        setTrendingMovies(sortTrendingMovies(movies["TrendingNow"],JSON.parse(localStorage.getItem('movie')).Id))
    }

    setIsFirstRender(false)

    return () => {
        clearTimeout(changeStatus)
    }

},[featuredMovie])

    return (
        <div className={s.contentBlock}>


            <Featured
                videoPlayStatus={videoPlayStatus}
                featuredMovie={featuredMovie}
                setVideoPlayStatus={setVideoPlayStatus}
            />

            <Trending
                trendingMovies={trendingMovies}
                setFeaturedMovie={setFeaturedMovie}
                setVideoPlayStatus={setVideoPlayStatus}
            />
        </div>

    );
}

export default Content;