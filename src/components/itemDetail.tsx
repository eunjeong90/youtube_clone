import styled from 'styled-components';
import ItemCard from './itemCard';

interface Props {
  videoItem: {
    id: string;
    snippet: {
      thumbnails: { default: { url: string } };
      title: string;
      channelTitle: string;
      description: string;
    };
  };
}

const ItemDetail = ({ videoItem, videoItem: { snippet } }: Props) => {
  return (
    <DetailBox>
      <div>
        <VideoFrame
          title={`${snippet.title}`}
          src={`https://www.youtube.com/embed/${videoItem.id}`}
          frameBorder="0"
          allowFullScreen
        ></VideoFrame>
      </div>
      <VideoText>
        <h2>{snippet.title}</h2>
        <h3>{snippet.channelTitle}</h3>
        <pre>{snippet.description}</pre>
      </VideoText>
    </DetailBox>
  );
};

const DetailBox = styled.div`
  width: 100%;
`;
const VideoFrame = styled.iframe`
  width: 100%;
  height: 65vh;
  display: block;
`;
const VideoText = styled.div`
  h2 {
    font-size: 32px;
    font-weight: bold;
  }
  h3 {
    font-size: 18px;
  }
  pre {
    font-size: 16px;
    white-space: pre-line;
  }
`;

export default ItemDetail;
