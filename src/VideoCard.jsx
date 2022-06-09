import React from 'react';
import useClickOutside from './useClickOutside';

const VideoCard = ({ video }) => {
  const { videoId, videoTitle, videoThumbnail } = video;
  const { ref, isComponentVisible, setIsComponentVisible } =
    useClickOutside(false);
  return (
    <div key={videoId} className="video__card">
      <img src={videoThumbnail} alt="thumbnail1" />
      <div className="video_card__bottom">
        <p>{videoTitle}</p>
        <section ref={ref} className="video__actions">
          <button onClick={() => setIsComponentVisible((state) => !state)}>
            &#8942;
          </button>
          <section
            className={`video__actions__options ${
              !isComponentVisible && 'hidden'
            } `}
          >
            {/* another fork */}
            <span>Like</span>
            <span>Add To Playlist</span>
            <span>Add To Watch Later</span>
          </section>
        </section>
      </div>
    </div>
  );
};

export { VideoCard };
