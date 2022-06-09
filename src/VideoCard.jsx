import React from 'react';
import useClickOutside from './useClickOutside';
import { VideoActions } from './VideoActions';

const VideoCard = ({ video }) => {
  const { videoId, videoTitle, videoThumbnail } = video;
  const [showOptions, setShowOptions] = React.useState(false);
  return (
    <div key={videoId} className="video__card">
      <img src={videoThumbnail} alt="thumbnail1" />
      <div className="video_card__bottom">
        <p>{videoTitle}</p>
        <VideoActions
          isComponentVisible={isComponentVisible}
          setIsComponentVisible={setIsComponentVisible}
          ref={ref}
        />
      </div>
    </div>
  );
};

export { VideoCard };
