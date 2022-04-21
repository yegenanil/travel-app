import styled from "styled-components";
import backgroundImg from "./assets/Bg.png";
import MainContainer from "./components/MainContainer";

const Container = styled.div`
  width: 1600px;
  height: 969px;
  background-image: url(${backgroundImg});
  margin: 0 auto;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: relative;
  
`;

function App() {
  return (
    <Container> 
      <MainContainer />
    </Container>
  );
}

export default App;
