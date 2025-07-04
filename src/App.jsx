import { useState } from 'react';
import styled from "styled-components";

import './App.css';

function App() {
  
   const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
    <Container>
      <Card>
        <h2>Input Field App</h2>
        <InputField 
          type="text" 
          value={text} 
          onChange={handleChange} 
          placeholder="Type something..." 
        />
        <DisplayText>You typed: {text}</DisplayText>
      </Card>
    </Container>
      
    </>
  )
}

export default App


const Container = styled.div`
  min-height: 100vh;
  background: #f3f4f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  text-align: center;
`;

const InputField = styled.input`
  padding: 12px;
  font-size: 1rem;
  width: 100%;
  max-width: 300px;
  border: 2px solid #cbd5e0;
  border-radius: 8px;
  outline: none;
  margin-bottom: 20px;

  &:focus {
    border-color: #4299e1;
  }
`;

const DisplayText = styled.p`
  font-size: 1.2rem;
  color: #333;
`;




