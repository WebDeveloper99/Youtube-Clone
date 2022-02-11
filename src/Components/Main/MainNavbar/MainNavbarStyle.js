import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const  Link = styled(NavLink)`

color: white;
text-decoration: none;
background-color: rgb(77,77,77);
padding: 4px 10px;
border-radius: 12px;
:hover{
    background-color: #717171;
}
:focus{
    color: black;
    background-color: white;
}

`


export const Navbar = styled.div`

position: absolute;
display: flex;
justify-content: space-evenly;
padding: 10px 0;
width: 1278px;
border: 2px solid rgba(255, 255, 255, 0.2);
border-left-color: transparent;
border-right-color: transparent;
background: rgba(33, 33, 33, 0.98);



`
