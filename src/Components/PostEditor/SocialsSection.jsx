import React from "react";
import VideoTutorial from "./VideoTutorial";
const SocialsSection = () => {
  return (
    <div className="section-container border-b-2 border-gray-200">
      <div className="section-heading">{t("Socials")}</div>
      <div className="flex flex-row gap-10 justify-between">
        <div className="flex grow flex-col gap-10">
          <div className="section-description">{t(
            "Add social media links with tracking parameters to monitor which\r\n            platforms are driving traffic to your event."
          )}</div>
        </div>
      </div>
      <VideoTutorial />
    </div>
  );
};
export default SocialsSection;
