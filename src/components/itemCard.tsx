import styled from "styled-components";

interface StyleProps {
  page?: string;
}
interface ItemCardProps extends StyleProps {
  title: string;
  info: string;
  src: string;
  href: string;
}
const ItemCard = ({ page = "", title, info, src, href }: ItemCardProps) => {
  return (
    <ItemBox href="./" page={page}>
      <Thumbnails>
        <img src={src} alt="sample" />
      </Thumbnails>
      <TextArea>
        <strong>{title}</strong>
        <p>{info}</p>
      </TextArea>
    </ItemBox>
  );
};

const ItemBox = styled.a<StyleProps>`
  display: flex;
  max-width: 48rem;
  width: ${(props) => (props.page === "detail" ? "30%" : "100%")};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border-radius: 0.5rem;
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
  }
`;
export default ItemCard;
