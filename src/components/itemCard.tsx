import styled from "styled-components";

interface StyleProps {
  page?: string;
}
interface ItemCardProps extends StyleProps {
  title: string;
  src: string;
  channel: string;
  onVideoClick: () => void;
}
const ItemCard = ({
  page = "",
  title,
  src,
  channel,
  onVideoClick,
}: ItemCardProps) => {
  return (
    <ItemBox page={page} onClick={() => onVideoClick()}>
      <Thumbnails>
        <img src={src} alt={`${title} thumbnail`} />
      </Thumbnails>
      <TextArea>
        <strong>{title}</strong>
        <p>{channel}</p>
      </TextArea>
    </ItemBox>
  );
};

const ItemBox = styled.div<StyleProps>`
  display: flex;
  min-width: 48rem;
  width: ${(props) => (props.page === "detail" ? "30%" : "50%")};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border-radius: 0.5rem;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
const Thumbnails = styled.div`
  padding: 0.5rem;
`;
const TextArea = styled.div`
  padding: 0.5rem;
  width: 100%;
  strong {
    font-weight: 500;
    font-size: 1.6rem;
  }
  p {
    font-size: 1.4rem;
    color: gray;
  }
`;
export default ItemCard;
