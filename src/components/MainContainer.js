import styled from "styled-components";
import Card from "./Card";
import Datebar from "./Datebar";
import Navbar from "./Navbar";

const MainContainerDiv = styled.div`
  width: 1440px;
  height: 900px;
  box-shadow: 0px 0px 50px #5eedea;
  border-radius: 20px;
  margin-left: 80px;
  margin-top: 50px;
  position: absolute;
`;

const MainContainer = () => {
  return (
    <MainContainerDiv>
      <Navbar />
      <Card />
      <Datebar />
    </MainContainerDiv>
  );
};

export default MainContainer;
