import { useEffect, useState } from "react";
import videoList from "data/videoList.json";
import ItemCard from "./itemCard";

interface reqProps {
  method: string;
  redirect: RequestRedirect;
}
type DateType = {
  [x: string]: any;
  id: string;
  title: string;
  url: string;
};
const ItemList = () => {
  const [videoItem, setVideoItem] = useState<DateType[]>([]);
  // useEffect(() => setVideoItem(videoList.items), []);
  useEffect(() => {
    const requestOptions: reqProps = {
      method: "GET",
      redirect: "follow",
    };

    fetch("", requestOptions)
      .then((response) => response.json())
      .then((result) => setVideoItem(result.item))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div>
      {videoItem.map((item) => (
        <ItemCard
          key={item.id}
          title={item.snippet.title}
          src={item.snippet.thumbnails.default.url}
        />
      ))}
    </div>
  );
};

export default ItemList;
