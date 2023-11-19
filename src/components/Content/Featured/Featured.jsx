"use client"
import React from 'react';
import s from "@/components/Content/Content.module.css";
import Image from "next/image";
import coverTitle from "../../../../public/images/FeaturedTitleImage.png";
import Button from "@/components/Button/Button";
import {FaPlay} from "react-icons/fa";



import dynamic from "next/dynamic";
import {getMovieDuration} from "@/utils/helpFunctions/helpFunctions";
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

function Featured(props) {
    const duration = getMovieDuration(props?.featuredMovie["Duration"])
    return (
        <div className={s.featuredBlockWrapper}>
            {props.videoPlayStatus ?
                (
                    <div className={s.videoPlayer}>
                        <ReactPlayer
                            url={props.featuredMovie.VideoUrl}
                            playing={true}
                            width={"100%"}
                            onEnded = {() => {props.setVideoPlayStatus(false)}}
                        />
                    </div>
                )
                :
                (
                    <div className={s.featuredBlock} style={{
                        backgroundImage:`url(/images/${props.featuredMovie.CoverImage})`
                    }

                    }>
                        <div className={s.movie}>{props.featuredMovie["Category"]}</div>
                        <div className={s.title}>
                            <Image src={coverTitle} alt={"Cover Title"} />
                        </div>
                        <div className={s.info}>
                            <div className={s.releaseData}>{props.featuredMovie["ReleaseYear"]}</div>
                            <div className={s.category}>{props.featuredMovie["MpaRating"]}</div>
                            <div className={s.duration}>{duration}</div>
                        </div>
                        <div className={s.description}>
                            {props.featuredMovie.Description}
                        </div>
                        <div className={s.controls}>
                            <Button
                                icon={<FaPlay />}
                                background={"#fff"}
                                color={"#000"}
                                text={"Play"}
                                handleClick={props.setVideoPlayStatus}
                            />
                            <Button
                                background={"#2024DF"}
                                color={"#fff"}
                                text={"More Info"}
                            />
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Featured;