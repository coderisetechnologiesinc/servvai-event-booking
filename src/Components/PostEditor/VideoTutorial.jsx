import React from "react";
const VideoTutorial = ({ url }) => {
  return (
    <div className="flex flex-row border-2 border-gray-300 gap-1 p-4 rounded-lg bg-gray-50">
      <div className="rounded-lg grid grid-cols-2 gap-4">
        {/* Video */}
        <iframe
          width="100%"
          height="auto"
          src="https://www.youtube.com/embed/WeA7edXsU40?si=86EBWTxVGQCigGPt"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="rounded-lg size-100"
        ></iframe>
        {/* Description */}
        <div className="flex flex-col gap-3 justify-stretch">
          <div className="text-md font-semibold">What is a UTM link?</div>
          <div className="text-light text-sm">
            A UTM link is a URL with tags added to track marketing campaign
            performance.
          </div>
          <a className="text-violet-400 font-semibold no-underline">
            See examples
          </a>
        </div>
      </div>
    </div>
  );
};
export default VideoTutorial;
