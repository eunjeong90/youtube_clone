import { useState, useEffect } from "react";
import YoutubeApi from "src/service/youtube";
import "./app.css";
import GlobalStyle from "src/globalStyles";
import Container from "src/components/container";
import Header from "src/components/header";
import ItemDetail from "src/components/itemDetail";
import ItemList from "src/components/itemList";

const youtube = new YoutubeApi(process.env.REACT_APP_YOUTUBE_API_KEY);

type DateType = {
  [x: string]: any;
  id: string;
  title: string;
  url: string;
  channelTitle: string;
  videoId: string;
};

function App() {
  const [videoItem, setVideoItem] = useState<DateType[]>([]);
  const search = (query: string) => {
    youtube
      .search(query) //
      .then((items: DateType[]) => setVideoItem(items));
  };
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((items: DateType[]) => setVideoItem(items));
  }, []);
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header onSearch={search} />
        <ItemList videoItem={videoItem} />
        {/* <ItemDetail /> */}
      </Container>
    </>
  );
}

export default App;
