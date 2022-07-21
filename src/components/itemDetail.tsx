import styled from "styled-components";
import ItemCard from "./itemCard";

const ItemDetail = () => {
  return (
    <DetailBox>
      <VideoArea>
        <div>
          <img src="./" alt="sample" />
        </div>
        <div>
          <p></p>
        </div>
      </VideoArea>
      <ItemCard page={"detail"} />
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
