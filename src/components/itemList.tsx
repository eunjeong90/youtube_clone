import { useEffect, useState } from "react";
import videoList from "data/videoList.json";
import ItemCard from "./itemCard";

type DateType = {
  id: string;
  snippet: string;
  items: string;
};
const ItemList = () => {
  const [videoItem, setVideoItem] = useState<DateType[]>([]);
  useEffect(() => setVideoItem(videoList.items), []);
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
