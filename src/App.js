import React from 'react';
import './style.css';
import { videoData } from './videoData';
import {VideoCard} from "./VideoCard"
export default function App() {
  return (
    <div>
      <h1>Custom Hooks and More!!</h1>

      <div className="video__listing">
        {videoData.map((video) => (
          <VideoCard key={video.videoId} video={video} />
        ))}
      </div>
    </div>
  );
}
