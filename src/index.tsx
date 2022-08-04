import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
/* import YoutubeApi from 'src/service/youtube';

interface youTubeApiProps {
  id: { videoId: string };
  snippet: {
    thumbnails: { default: { url: string } };
    title: string;
    channelTitle: string;
  };
}
const youtube = new YoutubeApi(process.env.REACT_APP_YOUTUBE_API_KEY);
 */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
