import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface reqProps {
  method: string;
  redirect: RequestRedirect;
}
const ItemCard = () => {
  const [videoItem, setVideoItem] = useState([]);
  const requestOptions: reqProps = {
    method: 'GET',
    redirect: 'follow',
  };
  useEffect(() => {
    fetch(
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=lofi&key=AIzaSyANJl-HNNmgsKJ-Yb0qUd3XS5uON39aheU',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }, []);
  return (
    <a href="./">
      <ItemBox>
        <Thumbnails>
          <img src={'https://via.placeholder.com/120x90.jpg'} alt="sample" />
        </Thumbnails>
        <TextArea>
          <strong>타이틀자리</strong>
          <p>게시자</p>
        </TextArea>
      </ItemBox>
    </a>
  );
};

const ItemBox = styled.div`
  display: flex;
  max-width: 48rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border-radius: 0.5rem;
`;
const Thumbnails = styled.div`
  padding: 0.5rem;
`;
const TextArea = styled.div`
  padding: 0.5rem;
  strong {
    font-weight: 500;
    font-size: 1.6rem;
  }
  p {
    font-size: 1.4rem;
  }
`;
export default ItemCard;
