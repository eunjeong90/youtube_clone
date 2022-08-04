import { useState, useEffect } from 'react';
import axios from 'axios';

const useData = () => {
  const youtube = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videoItem, setVideoItem] = useState<any[]>([]);
  const [searchItem, setSearchItem] = useState<any[]>([]);

  useEffect(() => {
    const getMostPopularVideo = async () => {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&type=video&chart=mostPopular&maxResults=25&key=${youtube}`
      );
      setVideoItem(response.data);
    };
    getMostPopularVideo();
  }, []);

  useEffect(() => {
    const getSearchVideo = async () => {
      const response = await axios.get(
        // `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${query}&key=${youtube}`
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&key=${youtube}`
      );
      setSearchItem(response.data);
      searchItem.map((item) => ({
        ...item,
        id: item.id.videoId,
      }));
    };
    getSearchVideo();
  }, []);
};

export default useData;
