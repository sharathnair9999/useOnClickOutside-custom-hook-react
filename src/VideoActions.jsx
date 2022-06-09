import React from 'react';

const VideoActions = React.forwardRef(
  ({ isComponentVisible, setIsComponentVisible }, ref) => {
    return (
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
    );
  }
);

export { VideoActions };
