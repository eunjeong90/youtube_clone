import ItemCard from "./itemCard";

const ItemList = ({ videoItem }) => {
  return (
    <div>
      {videoItem.map((item) => (
        <ItemCard
          key={item.id.videoId}
          src={item.snippet.thumbnails.default.url}
          title={item.snippet.title}
          channel={item.snippet.channelTitle}
        />
      ))}
    </div>
  );
};

export default ItemList;
