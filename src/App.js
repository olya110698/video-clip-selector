import React, { useState } from 'react';
import { VideoInput } from './components/VideoInput/VideoInput';
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer';

export function App() {
  const [videoUrl, setVideoUrl] = useState('');

  const handleVideoLinkSubmit = (link) => {
    setVideoUrl(link);
  };

  return (
    <div className="App">
      {!videoUrl 
       ? <VideoInput onVideoLinkSubmit={handleVideoLinkSubmit} />
       :  <VideoPlayer videoUrl={videoUrl} />
      }
    </div>
  );
}