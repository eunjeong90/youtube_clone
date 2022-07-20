import styled from 'styled-components';

const SearchBar = () => {
  return (
    <Form>
      <input type="text" placeholder="Search..." />
      <button type="button">👆</button>
    </Form>
  );
};

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  input {
    width: 100%;
    padding: 0.5rem 0.1rem;
  }
  button {
    background-color: gray;
    padding: 0.5rem 0.8rem;
    cursor: pointer;
  }
`;
export default SearchBar;
