import styled from 'styled-components';
import {useState} from 'react';
import { FaBars } from "react-icons/fa";
import logo from '../../assets/my-logo-04.png';
import {Link} from 'react-router-dom';
import { LiaTimesSolid } from "react-icons/lia";



const NavContainer = styled.div`
display: flex;
flex-direction: column;
`;
const Header = styled.div`
display: flex;
position: fixed;
top: 0;
left: 0;
right:0;
height: 50px;
box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.15);
background-color: #fff;
justify-content:space-between;
align-items: center;
padding-left: 1.5rem;
padding-right:1.5rem;~
`;
const Toggle = styled.div`
height:45px;
font-size: 30px;
display: flex;
align-items: center;
cursor:pointer;
color: #4d008a;
`;
const Brand = styled.div`
height: 45px;
`;

const Logo = styled.img`
height:45px;
`;

const Menu = styled.ul`
display: ${({toggleNav}) => (toggleNav ? 'flex' : 'none') };
flex-direction: column;
position: fixed;
margin:0;
padding: 0;
top:50px;
left: 0;
right: 0;
list-style: none;
border-bottom: solid 1px ash;
background-color: white;
align-items: center;
justify-content: center;
`;

const Item = styled.li`
color: #4d008a;
padding-top: 1rem;
padding-bottom: 1rem;
display: flex;
align-items: center;
justify-content: center;
margin:0;
flex: 1;
height: 100%;
border-bottom: solid 1px #f5f5f5;
:hover{
  background-color: #4d008a;
  color: white;
}
`;
const ItemLink = styled(Link)`
text-decoration: none;
color: #4d008a;
flex: 1;
width: 100%;
height: 100%;
`;

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  
  const toggle = () => setNavOpen(!navOpen);
  console.log(navOpen);
  return(
    <NavContainer>
      <Header>
        <Brand>
         <Logo src={logo}/>
       </Brand>
       <Menu toggleNav ={navOpen}>
       <Item>
         <ItemLink to='/home' >Home</ItemLink>
       </Item>
       <Item>
          <ItemLink to='home' >About Me</ItemLink>
       </Item>
       <Item>
          <ItemLink to='home' >My Portfolio</ItemLink>
       </Item>
       <Item>
          <ItemLink to='home' >Contact Me</ItemLink>
       </Item>
      </Menu>
      {!navOpen?
       <Toggle onClick = {toggle}><FaBars /></Toggle> :<Toggle onClick =
       {toggle}><LiaTimesSolid /></Toggle>}
      </Header>
      </NavContainer>
    )
};
export default NavBar;