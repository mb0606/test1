import React from 'react';
import { Container } from 'react-bootstrap';
import MyNav from "./components/MyNav"
import Home from "./components/Home"

function App() {
  return (
    <Container>
      <MyNav />
      <Home />
    </Container>
  );
}

export default App;
