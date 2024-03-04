import React from "react";

function VideoComponent(props: { src: string[] }) {
  return (
    <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black relative">
      <video loop autoPlay muted className="inset-0 w-full h-full ">
        <source src={props.src[0]} type="video/mp4" />
        <source src={props.src[1]} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoComponent;
