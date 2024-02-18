import styled from "styled-components";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/my-logo-04.png";
import { Link } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";

//const NavContainer = styled.div`
//display: flex;
//flex-direction: column;
//@media(max-width: 768px){
//    flex-direction: row;
//}
//`;
const Header = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.15);
    background-color: #fff;

    justify-content: space-between;
    align-items: center;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`;
const Toggle = styled.div`
    height: 45px;
    font-size: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #4d008a;
    @media (min-width: 768px) {
        display: none;
    }
`;
const Brand = styled.div`
    height: 45px;
`;

const Logo = styled.img`
    height: 45px;
`;

const LinksWrap = styled.div`
    display: ${({ toggleNav }) => (toggleNav ? "flex" : "none")};
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        position: relative;
        top: 0;
        background: none;
    }
`;

const Menu = styled.ul`
    list-style-type: none;
`;

const Item = styled.li`
    padding: 2rem;
    :hover {
        background-color: #4d008a;
        color: white;
    }
    @media (min-width: 768px) {
        display: inline-block;
        padding-right: 0.2rem;
    }
`;
const ItemLink = styled(Link)`
    text-decoration: none;
    color: #4d008a;
    width: 100%;
    height: 100%;
`;

const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggle = () => setNavOpen(!navOpen);
    console.log(navOpen);
    return (
        <Header>
            <Brand>
                <Logo src={logo} />
            </Brand>
            <LinksWrap toggleNav={navOpen}>
                <Menu toggleNav={navOpen}>
                    <Item>
                        <ItemLink to="/home">Home</ItemLink>
                    </Item>
                    <Item>
                        <ItemLink to="home">About Me</ItemLink>
                    </Item>
                    <Item>
                        <ItemLink to="home">My Portfolio</ItemLink>
                    </Item>
                    <Item>
                        <ItemLink to="home">Contact Me</ItemLink>
                    </Item>
                </Menu>
            </LinksWrap>
            {!navOpen ? (
                <Toggle onClick={toggle}>
                    <FaBars />
                </Toggle>
            ) : (
                <Toggle onClick={toggle}>
                    <LiaTimesSolid />
                </Toggle>
            )}
        </Header>
    );
};
export default NavBar;
