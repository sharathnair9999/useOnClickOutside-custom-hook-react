import React from 'react';

const VideoCard = ({ video }) => {
  const { videoId, videoTitle, videoThumbnail } = video;
  const [showOptions, setShowOptions] = React.useState(false);
  return (
    <div key={videoId} className="video__card">
      <img src={videoThumbnail} alt="thumbnail1" />
      <div className="video_card__bottom">
        <p>{videoTitle}</p>
        <section className="video__actions">
          <button onClick={() => setShowOptions((state) => !state)}>
            &#8942;
          </button>
          <section
            className={`video__actions__options ${!showOptions && 'hidden'} `}
          >
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
