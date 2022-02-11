import styled from 'styled-components'
import { ReactComponent as Logo } from '../../Image/icons/logo.svg'
import { ReactComponent as Menu } from '../../Image/icons/menu.svg'
import { ReactComponent as Search } from '../../Image/icons/search.svg'
import { ReactComponent as Camera } from '../../Image/icons/camera.svg'
import { ReactComponent as MainMenu } from '../../Image/icons/main.svg'
import { ReactComponent as Bang } from '../../Image/icons/bang.svg'
import { ReactComponent as Avatar } from '../../Image/icons/pp.svg'


export const HeaderStyle = styled.div `

display: flex;
position: fixed;
z-index: 9999;
width: 1518px;
height: 56px;
left: 0px;
top: 0px;
background: rgba(33, 33, 33, 0.98);

`

HeaderStyle.Menu = styled(Menu)`

width: 25px; 
height: 25px;
margin: 15px 0 0 25px;
color: wheat;
cursor: pointer;

`

HeaderStyle.Logo = styled(Logo)`

width: 110px;
height: 30px;
margin: 12px 0 0 25px;
cursor: pointer;   


`



export const Input = styled.input`

display: flex;
width: 567px;
height: 38px;
padding: 2px 12px;
border: 1px solid rgba(255, 255, 255, 0.2);
border-top-left-radius: 2px;
border-bottom-left-radius: 2px;
background-color: rgba(20, 20, 20, 0.6);
color: white;
margin: 12px 0 0 275px;



`



export const SearchBtn = styled.div`

display: flex;
width: 65px;
height: 38px;
margin: 12px 0 0 0;
background-color: rgba(255, 255, 255, 0.2);
cursor: pointer;
`

SearchBtn.Search = styled(Search)`

width: 20px;
height: 20px;
margin: 8px 0 0 20px;

`




export const SubNav = styled.div`
display: flex;
justify-content: space-between;
padding: 8px;
width: 150px;
height: 40px;
margin: 8px 0 0 230px;

`


SubNav.Camera = styled(Camera)`

width: 24px;
height: 24px;
margin-top: 4px;
cursor: pointer;

`
SubNav.MainMenu = styled(MainMenu)`

width: 16px;
height: 16px;
margin-top: 8px;
cursor: pointer;

`
SubNav.Bang = styled(Bang)`

width: 16px;
height: 20px;
margin-top: 6px;
cursor: pointer;

`
SubNav.Avatar = styled(Avatar)`

width: 30px;
height: 30px;
cursor: pointer;

`