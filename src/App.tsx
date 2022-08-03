import { useState, useEffect } from 'react';
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

function App({ youtube }: any) {
  const [videoItem, setVideoItem] = useState<any>([]);
  const [selectedVideo, setSelectedVideo] = useState<any | null>(null);
  const selectVideo = (videoItem: any) => {
    setSelectedVideo(videoItem);
  };
  const search = (query: string) => {
    youtube
      .search(query) //
      .then((items: any) => {
        setVideoItem(items);
        setSelectedVideo(null);
      });
  };
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((items: any) => setVideoItem(items));
  }, []);
  return (
    <>
      <GlobalStyle />
      <Header onSearch={search} />
      <Container>
        {selectedVideo && (
          <div>
            <ItemDetail videoItem={selectedVideo} />
          </div>
        )}
        <div>
          <ItemList videoItem={videoItem} onVideoClick={selectVideo} />
        </div>
      </Container>
    </>
  );
}

export default App;
