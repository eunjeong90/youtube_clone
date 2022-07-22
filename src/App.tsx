import { useState, useEffect } from "react";
import "./app.css";
import GlobalStyle from "src/globalStyles";
import Container from "src/components/container";
import Header from "src/components/header";
import ItemDetail from "src/components/itemDetail";
import ItemList from "src/components/itemList";

type DateType = {
  id: string;
  title: string;
  url: string;
  channelTitle: string;
  videoId: string;
};

function App({ youtube }: any) {
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
