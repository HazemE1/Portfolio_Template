"use client";
import React, { ReactNode, useEffect, useRef } from "react";

function VideoComponent(props: {
  children: ReactNode;
  src: string[];
  bgurl: string;
}) {
  return (
    <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl  group">
      <div
        className={`inset-0 w-full h-full absolute group-hover:hidden rounded-2xl overflow-hidden  z-30`}
      >
        <img className="h-full w-full rounded-2xl" src={props.bgurl}></img>
        <div className={`inset-0 w-full h-full absolute  bg-gray-100/80 z-30`}>
          {props.children}
        </div>
      </div>
      <video
        onMouseEnter={(video) => video.currentTarget.play()}
        onMouseLeave={(video) => video.currentTarget.pause()}
        loop
        muted
        className="inset-0 w-full h-full rounded-2xl overflow-hidden   absolute z-10  "
      >
        <source src={props.src[0]} type="video/mp4" />
        <source src={props.src[1]} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoComponent;
