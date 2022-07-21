import { useState, SetStateAction, useEffect } from "react";
import "./app.css";
import GlobalStyle from "./globalStyles";
import Container from "components/container";
import Header from "components/header";
import ItemDetail from "components/itemDetail";
import ItemList from "components/itemList";

type DateType = {
  [x: string]: any;
  id: string;
  title: string;
  url: string;
  channelTitle: string;
  videoId: string;
};

function App({ youtube }) {
  const [videoItem, setVideoItem] = useState<DateType[]>([]);
  const search = (query: any) => {
    youtube
      .search(query) //
      .then((items: SetStateAction<DateType[]>) => setVideoItem(items));
  };
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((items) => setVideoItem(items));
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
