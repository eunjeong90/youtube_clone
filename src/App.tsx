import "./app.css";
import GlobalStyle from "./globalStyles";
import Container from "components/container";
import Header from "components/header";
import ItemCard from "components/itemCard";
import ItemDetail from "components/itemDetail";
import ItemList from "components/itemList";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <ItemList />
        {/* <ItemDetail /> */}
      </Container>
    </>
  );
}

export default App;
