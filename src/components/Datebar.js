import styled from "styled-components";
import iconDown from "../assets/iconDown.svg";
import iconHome from "../assets/iconHome.svg";
import iconCalendar from "../assets/iconCalendar.svg";
import iconUser from "../assets/iconUser.svg";

const DatebarContainer = styled.div`
  width: 1320px;
  height: 144px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 64.0184px 76.8221px 80px rgba(0, 0, 0, 0.07),
    41.4934px 49.7921px 46.8519px rgba(0, 0, 0, 0.0531481),
    24.659px 29.5907px 25.4815px rgba(0, 0, 0, 0.0425185),
    12.8037px 15.3644px 13px rgba(0, 0, 0, 0.035),
    5.21632px 6.25958px 6.51852px rgba(0, 0, 0, 0.0274815),
    1.18553px 1.42263px 3.14815px rgba(0, 0, 0, 0.0168519);
  border-radius: 12px;
  margin-top: 36px;
  margin-left: 60px;
`;

const DateSectionArea = styled.div`
  display: flex;
  padding: 36px 0 36px 37px;
`;

const DateSection = styled.div`
  width: 1046px;
  height: 72px;
  display: flex;
  background: #ffffff;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 64.0184px 76.8221px 80px rgba(0, 0, 0, 0.07),
    41.4934px 49.7921px 46.8519px rgba(0, 0, 0, 0.0531481),
    24.659px 29.5907px 25.4815px rgba(0, 0, 0, 0.0425185),
    12.8037px 15.3644px 13px rgba(0, 0, 0, 0.035),
    5.21632px 6.25958px 6.51852px rgba(0, 0, 0, 0.0274815),
    1.18553px 1.42263px 3.14815px rgba(0, 0, 0, 0.0168519);
  border-radius: 12px;
`;

const DateSectionFirstPart = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DateSectionFirstPartIconHome = styled.img`
  width: 28px;
  height: 28px;
  opaicty: 0.5;
  padding: 21px 20px 11px 20px;
`;

const DateSectionFirstPartContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 223px;
  height: 42px;
  justify-content: center;
`;
const DateSectionFirstPartContentTitle = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #3e4958;
`;

const DateSectionFirstPartContentDescription = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #3e4958;
  margin-top: 8px;
`;

const DateSectionFirstPartIconDown = styled.img`
  width: 28px;
  height: 28px;
  opaicty: 0.4;
  padding: 21px 47px 21px 20px;
`;

const DateSearchButton = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  width: 175px;
  height: 72px;
  background: #e7ac72;
  border-radius: 12px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-left: 27px;
  padding: 26px 54px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #ff7b25;
    transform: translateY(-2px);
  }
`;

const Rectangle = styled.span`
  width: 0.73px;
  height: 70px;
  background: #f9e3d6;
  opacity: 0.3;
  border: 1px solid #2f4e84;
  box-sizing: border-box;
`;

const DateSectionSecondPart = styled.div`
  display: flex;
  cursor: pointer;
`;

const DateSectionSecondPartIcon = styled.img`
  width: 28px;
  height: 28px;
  padding: 21px 20px 21px 47px;
`;

const DateSectionSecondPartContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 47px 14px 0;
  align-items: center;
  justify-content: center;
`;

const DateSectionSecondPartContentTitle = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #3e4958;
  width: 77px;
`;

const DateSectionSecondPartContentHistory = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  color: #3e4958;
`;

const DateSectionLastPart = styled.div`
  display: flex;
  cursor: pointer;
`;
const DateSectionLastPartIconHome = styled.img`
  width: 28px;
  height: 28px;
  padding: 21px 0 21px 47px;
`;
const DateSectionLastPartContent = styled.div`
  height: 42px;
  display: flex;
  flex-direction: column;
  padding: 14px 47px 14px 0;
  align-items: center;
  justify-content: center;
  width: 102px;
  margin-left: -9px;
`;
const DateSectionLastPartContentTitle = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #3e4958;
`;
const DateSectionLastPartContentDescription = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  color: #3e4958;
`;
const DateSectionLastPartIconDown = styled.img`
  width: 40px;
  height: 32px;
  margin-left: -39px;
  margin-top: 19px;  
`;

const Datebar = () => {
  return (
    <DatebarContainer>
      <DateSectionArea>
        <DateSection>
          <DateSectionFirstPart>
            <DateSectionFirstPartIconHome src={iconHome} />
            <DateSectionFirstPartContent>
              <DateSectionFirstPartContentTitle>
                Accommodation
              </DateSectionFirstPartContentTitle>
              <DateSectionFirstPartContentDescription>
                6730 Luna Land North
              </DateSectionFirstPartContentDescription>
            </DateSectionFirstPartContent>
            <DateSectionFirstPartIconDown src={iconDown} />
          </DateSectionFirstPart>

          <Rectangle />

          <DateSectionSecondPart>
            <DateSectionSecondPartIcon src={iconCalendar} />
            <DateSectionSecondPartContent>
              <DateSectionSecondPartContentTitle>
                Check-in
              </DateSectionSecondPartContentTitle>
              <DateSectionSecondPartContentHistory>
                19.06.2019
              </DateSectionSecondPartContentHistory>
            </DateSectionSecondPartContent>
          </DateSectionSecondPart>

          <Rectangle />

          <DateSectionSecondPart>
            <DateSectionSecondPartIcon src={iconCalendar} />
            <DateSectionSecondPartContent>
              <DateSectionSecondPartContentTitle>
                Check-out
              </DateSectionSecondPartContentTitle>
              <DateSectionSecondPartContentHistory>
                24.06.2019
              </DateSectionSecondPartContentHistory>
            </DateSectionSecondPartContent>
          </DateSectionSecondPart>

          <Rectangle />

          <DateSectionLastPart>
            <DateSectionLastPartIconHome src={iconUser} />
            <DateSectionLastPartContent>
              <DateSectionLastPartContentTitle>
                Guests
              </DateSectionLastPartContentTitle>
              <DateSectionLastPartContentDescription>
                4 adults
              </DateSectionLastPartContentDescription>
            </DateSectionLastPartContent>
            <DateSectionLastPartIconDown src={iconDown} />
          </DateSectionLastPart>
        </DateSection>
        <DateSearchButton>Search</DateSearchButton>
      </DateSectionArea>
    </DatebarContainer>
  );
};

export default Datebar;
