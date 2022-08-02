import styled from 'styled-components';
import ItemCard from './itemCard';

interface ItemProps {
  id: string;
}
interface Props {
  videoItem: any;
  onVideoClick: (videoItem: any) => void;
}
const ItemList = ({ videoItem, onVideoClick }: Props) => {
  return (
    <ListBox>
      {videoItem.map((item: any) => (
        <ItemCard key={item.id} item={item} onVideoClick={onVideoClick} />
      ))}
    </ListBox>
  );
};

const ListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default ItemList;
