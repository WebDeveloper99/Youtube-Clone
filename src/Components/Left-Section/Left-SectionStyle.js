


import styled from "styled-components"; 

export const LeftContainer = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
background: rgba(33, 33, 33, 1);
position: absolute;
width: 240px;
height: 1035px;
padding: 12px 0;
top: 56px;



`




LeftContainer.Podpiska = styled.div`

width: 100%;
height: 45px;
font-weight: 600;
border-top: 1px solid #717171;
margin-bottom: 10px;
padding: 12px 0 12px 30px;
color: #717171;

`



export const LeftItemStyle = styled.div`

display: flex;
width: 100%;
height: 45px;
padding: 12px 0 12px 30px;
color: white;
cursor: pointer;
&:hover{
    background-color: rgba(255, 255, 255, 0.2);
}

`



LeftItemStyle.Icon = styled.div`

`



LeftItemStyle.Title = styled.div`

margin-left: 20px;

`