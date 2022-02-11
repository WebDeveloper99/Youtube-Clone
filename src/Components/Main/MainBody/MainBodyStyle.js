

import styled from "styled-components";

export const Body = styled.div`

display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
width: 1278px;
padding-top: 75px;
background-color: rgba(28, 28, 28, 1);

`


Body.BodyItem = styled.div`

display: flex;
flex-direction: column;
height: 300px;
background: rgba(28, 28, 28, 1);
margin-bottom: 20px;

`


export const Title = styled.div`

display: flex;
width: 200px;
margin-top: 10px;

`


Title.Icon = styled.div`



`


Title.Text = styled.div`

display: block;
flex-direction: column;
width: 250px;
margin: 0 15px;
color: white;
font-size: 16px;
font-weight: bold;


`

Title.ChanelName = styled.div`

font-size: 12px;
margin-top: 5p;
color: rgba(255, 255, 255, 0.6);
font-weight: bold;

`


Title.Date = styled.div`

font-size: 10px;
width: 200px;
margin-top: 5p;
color: rgba(255, 255, 255, 0.6);
font-weight: bold;

`
