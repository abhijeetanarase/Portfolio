import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const DownloadResume = () => {
  return (
    <div>
      <a
        href="/Abhijeet_Anarase_Resume.pdf"
        download
        className="flex items-center gap-2 text-background lg:text-text bg-text lg:bg-background border border-subtext px-4 py-2 rounded-full lg:hover:scale-110 hover:text-background lg:hover:bg-text transition-all duration-500"
      >
        <FontAwesomeIcon icon={faDownload} />
        Resume
      </a>
    </div>
  );
};

export default DownloadResume;
