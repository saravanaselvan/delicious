import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <div style={{ position: "relative" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <FaSearch />
      </div>
    </FormStyle>
  );
};

export default Search;

const FormStyle = styled.form`
  display: flex;
  position: relative;
  /* width: 100%; */
  justify-content: center;
  align-items: center;
  margin: 1rem 15rem;

  div {
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #607d8b, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
