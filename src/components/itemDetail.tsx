import styled from 'styled-components';
import ItemCard from './itemCard';

interface Props {
  videoItem: {
    id: string;
    snippet: {
      thumbnails: { default: { url: string } };
      title: string;
      channelTitle: string;
      publishedAt: string;
      description: string;
    };
    statistics: {
      viewCount: string;
      likeCount: string;
      favoriteCount: string;
    };
  };
}

const ItemDetail = ({
  videoItem,
  videoItem: { snippet, statistics },
}: Props) => {
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
        <div className="video-info">
          <div>
            <span>조회수</span>
            <span>{statistics.viewCount}</span>
            <span className="pl">{snippet.publishedAt}</span>
          </div>
          <div>
            <div>
              <span>👍</span>
              <span>{statistics.likeCount}</span>
            </div>
            <div className="pl">
              <span>❤</span>
              <span>{statistics.favoriteCount}</span>
            </div>
          </div>
        </div>
        <div className="video-pre">
          <span>{snippet.channelTitle}</span>
          <pre>{snippet.description}</pre>
        </div>
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
  padding-top: 5px;
  .pl {
    padding-left: 10px;
  }
  div {
    display: flex;
  }
  h2 {
    font-size: 20px;
    font-weight: 600;
  }
  span {
    font-size: 16px;
  }
  pre {
    font-size: 14px;
    white-space: pre-line;
  }
  div.video-info {
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
  }
  div.video-pre {
    flex-flow: column;
    padding-right: 221px;
    span {
      font-size: 14px;
    }
  }
`;

export default ItemDetail;
