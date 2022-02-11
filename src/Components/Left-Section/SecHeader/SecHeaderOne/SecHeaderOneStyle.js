
import styled  from "styled-components";
import { NavLink  } from "react-router-dom";



export const Link = styled(NavLink)`

display: flex;
align-items: center;
width: 240px;
height: 45px;
color: white;
/* text-decoration: none; */
padding: 2px 10px;
:hover{
    background-color: #303030;
}
:focus{
    background-color: #717171;
    text-decoration: none;
}

`



export const SecPodpsStyle = styled.div`

display: flex;
align-items: center;
width: 240px;
height: 45px;
color: white;
padding-left: 30px;

`


export const SecIcon = styled.div`

margin: 0 20px;


`

export const SecTitle = styled.div`

overflow: hidden;
margin-right: 10px;

`
