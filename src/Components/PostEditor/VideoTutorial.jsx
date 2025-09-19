import React from "react";
const VideoTutorial = ({ url }) => {
  return (
    <div className="flex flex-row border-2 border-gray-300 gap-1 p-4 rounded-lg bg-gray-50">
      <div className="rounded-lg grid grid-cols-2 gap-4">
        {/* Video */}
        <iframe />
        {/* Description */}
        <div className="flex flex-col gap-3 justify-stretch">
          <div className="text-md font-semibold">{t("What is a UTM link?")}</div>
          <div className="text-light text-sm">{t(
            "A UTM link is a URL with tags added to track marketing campaign\r\n            performance."
          )}</div>
          <a className="text-violet-400 font-semibold no-underline">{t("See examples")}</a>
        </div>
      </div>
    </div>
  );
};
export default VideoTutorial;
