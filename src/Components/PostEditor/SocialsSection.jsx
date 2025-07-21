import React from "react";
import VideoTutorial from "./VideoTutorial";
const SocialsSection = () => {
  return (
    <div className="section-container border-b-2 border-gray-200">
      <div className="section-heading">Socials</div>
      <div className="flex flex-row gap-10 justify-between">
        <div className="flex grow flex-col gap-10">
          <div className="section-description">
            Add social media links with tracking parameters to monitor which
            platforms are driving traffic to your event.
          </div>
        </div>
      </div>
      <VideoTutorial />
    </div>
  );
};
export default SocialsSection;
