import styled from 'styled-components';

interface StyleProps {
  page?: string;
}
interface ItemCardProps extends StyleProps {
  item: {
    snippet: {
      thumbnails: { default: { url: string } };
      title: string;
      channelTitle: string;
      src: string;
    };
  };
  onVideoClick: (item: any) => void;
}
const ItemCard = ({
  page = '',
  onVideoClick,
  item,
  item: { snippet },
}: ItemCardProps) => {
  return (
    <ItemBox page={page} onClick={() => onVideoClick(item)}>
      <Thumbnail>
        <img
          src={snippet.thumbnails.default.url}
          alt={`${snippet.title} thumbnail`}
        />
      </Thumbnail>
      <TextArea>
        <strong>{snippet.title}</strong>
        <p>{snippet.channelTitle}</p>
      </TextArea>
    </ItemBox>
  );
};

const ItemBox = styled.div<StyleProps>`
  display: flex;
  min-width: 48rem;
  width: ${(props) => (props.page === 'detail' ? '30%' : '50%')};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border-radius: 0.5rem;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
const Thumbnail = styled.div`
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
