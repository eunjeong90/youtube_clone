import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './app.css';
import GlobalStyle from 'src/globalStyles';
import Container from 'src/components/container';
import Header from 'src/components/header';
import ItemDetail from 'src/components/itemDetail';
import ItemList from 'src/components/itemList';

type DateType = {
  id: string;
  title: string;
  url: string;
  channelTitle: string;
  videoId: string;
};

function App() {
  // const [videoItem, setVideoItem] = useState<any>([]);
  // const [selectedVideo, setSelectedVideo] = useState<any | null>(null);
  // const selectVideo = (videoItem: any) => {
  //   setSelectedVideo(videoItem);
  // };
  // const search = useCallback(
  //   (query: string) => {
  //     youtube
  //       .search(query) //
  //       .then((items: any) => {
  //         setVideoItem(items);
  //         setSelectedVideo(null);
  //       });
  //   },
  //   [youtube]
  // );
  // useEffect(() => {
  //   youtube
  //     .mostPopular() //
  //     .then((items: any) => setVideoItem(items));
  // }, [youtube]);
  const youtube = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videoItem, setVideoItem] = useState<any[]>([]);
  const [searchItem, setSearchItem] = useState<any[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<any | null>(null);
  const selectVideo = (videoItem: any) => {
    setSelectedVideo(videoItem);
  };
  useEffect(() => {
    const getMostPopularVideo = async () => {
      try {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&type=video&chart=mostPopular&maxResults=25&key=${youtube}`
        );
        setVideoItem(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    getMostPopularVideo();
  }, []);

  // useEffect(() => {
  //   const getSearchVideo = async () => {
  //     const response = await axios.get(
  //       // `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${query}&key=${youtube}`
  //       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&key=${youtube}`,
  //     );
  //     setSearchItem(response.data);
  //     searchItem.map((item) => ({
  //       ...item,
  //       id: item.id.videoId,
  //     }));
  //   };
  //   getSearchVideo();
  // }, []);
  return (
    <>
      <GlobalStyle />
      {/* <Header onSearch={search} /> */}
      <Container>
        {/* {selectedVideo && (
          <div>
            <ItemDetail videoItem={selectedVideo} />
          </div>
        )} */}
        <div>
          <ItemList videoItem={videoItem} onVideoClick={selectVideo} />
        </div>
      </Container>
    </>
  );
}

export default App;
