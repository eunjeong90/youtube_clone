import styled from 'styled-components';
import ItemCard from './itemCard';

interface Props {
  videoItem: any;
}

const ItemDetail = ({ videoItem }: Props) => {
  return (
    <DetailBox>
      <VideoArea>
        <div>
          <img src="./" alt="sample" />
        </div>
        <div>
          <p>{videoItem.snippet.title}</p>
        </div>
      </VideoArea>
    </DetailBox>
  );
};

const DetailBox = styled.div`
  display: flex;
  width: 100%;
`;
const VideoArea = styled.section`
  width: 70%;
`;

export default ItemDetail;
