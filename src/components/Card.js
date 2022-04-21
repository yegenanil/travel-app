import styled from "styled-components";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import iconRight from "../assets/iconRight.svg";
import peopleIcon from "../assets/peopleIcon.svg";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 611px;
  height: 480px;
  align-items: flex-start;
  margin-top: 111px;
  margin-left: 60px;
`;

const CardContainerHeader = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #ffffff;
  }
`;

const Rectangle = styled.div`
  width: 2px;
  height: 10px;
  background: #ffffff;
  margin: 0px 10px;
`;

const CardContainerTitle = styled.h4`
  font-weight: 700;
  font-size: 47px;
  line-height: 57px;
  color: #ffffff;
  margin-top: 20px;
`;

const CardAreaHeader = styled.div`
  width: 611px;
  display: flex;
  align-items: center;
  margin-top: 50px;
  justify-content: space-between;
`;
const CardAreaSelection = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 10px;
`;

const CardAreaIcon = styled.img`
  cursor: pointer;
  margin-bottom: 14px;
`;

const TripCardArea = styled.div`
  display: flex;
`;

const TripCard = styled.div`
  width: 176px;
  height: 230px;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid #ffffff;
  box-shadow: 64.0184px 76.8221px 80px rgba(0, 0, 0, 0.07),
    41.4934px 49.7921px 46.8519px rgba(0, 0, 0, 0.0531481),
    24.659px 29.5907px 25.4815px rgba(0, 0, 0, 0.0425185),
    12.8037px 15.3644px 13px rgba(0, 0, 0, 0.035),
    5.21632px 6.25958px 6.51852px rgba(0, 0, 0, 0.0274815),
    1.18553px 1.42263px 3.14815px rgba(0, 0, 0, 0.0168519);
  border-radius: 12px;
  margin-right: 35px;
`;

const TripCardImage = styled.img`
  width: 156px;
  height: 154px;
  border-radius: 10px 10px 4px 4px;
  padding: 10px 10px 0 10px;
`;

const TripCardTitle = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 124.5%;
  letter-spacing: 0.015em;
  color: #023f76;
  padding: 10px 32px 0px 9.5px;
`;

const TripCardVisitorArea = styled.div`
  display: flex;
  align-items: center;
`;

const TripCardVisitorIcon = styled.img`
  width: 12px;
  height: 12px;
  margin-top: 5px;
  margin-left: 9.5px;
`;

const TripCardVisitorCount = styled.span`
  font-weight: 300;
  font-size: 12px;
  line-height: 124.5%;
  letter-spacing: -0.02em;
  color: #023f76;
  margin-top: 3.5px;
  margin-left: 10px;
`;

const Card = () => {
  return (
    <CardContainer>
      <CardContainerHeader>
        <span>mountains</span>
        <Rectangle />
        <span>plains</span>
        <Rectangle />
        <span>beaches</span>
      </CardContainerHeader>
      <CardContainerTitle>
      Spend your vacation with our activities
      </CardContainerTitle>
      <CardAreaHeader>
        <CardAreaSelection>Most Popular </CardAreaSelection>
        <CardAreaIcon src={iconRight} />
      </CardAreaHeader>
      <TripCardArea>
        <TripCard>
          <TripCardImage src={card1} />
          <TripCardTitle>Trip to Scotland</TripCardTitle>
          <TripCardVisitorArea>
            <TripCardVisitorIcon src={peopleIcon} />
            <TripCardVisitorCount>31 people going</TripCardVisitorCount>
          </TripCardVisitorArea>
        </TripCard>
        <TripCard>
          <TripCardImage src={card2} />
          <TripCardTitle>Trip to Egypt</TripCardTitle>
          <TripCardVisitorArea>
            <TripCardVisitorIcon src={peopleIcon} />
            <TripCardVisitorCount>27 people going</TripCardVisitorCount>
          </TripCardVisitorArea>
        </TripCard>
        <TripCard>
          <TripCardImage src={card3} />
          <TripCardTitle>Trip to Greece</TripCardTitle>
          <TripCardVisitorArea>
            <TripCardVisitorIcon src={peopleIcon} />
            <TripCardVisitorCount>20 people going</TripCardVisitorCount>
          </TripCardVisitorArea>
        </TripCard>
      </TripCardArea>
    </CardContainer>
  );
};

export default Card;
