import styled from "styled-components";
import logoimg from "../assets/logo.svg";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 58px;
`;
const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 40px;
  margin-left: 60px;
`;

const NavigationBar = styled.div`
  margin-top: 40px;
  margin-right: 22px;

  a {
    text-decoration: none;
    margin-left: 55px;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;

    &.active {
      border: 2px solid #ffffff;
      box-sizing: border-box;
      border-radius: 12px;
      padding: 13px 44px;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={logoimg} alt="logo" />
      <NavigationBar>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Premium</a>
        <a href="#">Blogs</a>
        <a href="#" className="active">
          Explore
        </a>
      </NavigationBar>
    </NavbarContainer>
  );
};

export default Navbar;
