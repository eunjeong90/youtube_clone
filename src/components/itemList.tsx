import styled from 'styled-components';
import ItemCard from './itemCard';

interface ItemProps {
  id: { videoId: string };
  snippet: {
    thumbnails: { default: { url: string } };
    title: string;
    channelTitle: string;
  };
}
interface Props {
  videoItem: any;
  onVideoClick: () => void;
}
const ItemList = ({ videoItem, onVideoClick }: Props) => {
  return (
    <ListBox>
      {videoItem.map((item: ItemProps) => (
        <ItemCard
          key={item.id.videoId}
          src={item.snippet.thumbnails.default.url}
          title={item.snippet.title}
          channel={item.snippet.channelTitle}
          onVideoClick={onVideoClick}
          videoItem={videoItem}
        />
      ))}
    </ListBox>
  );
};

const ListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default ItemList;
