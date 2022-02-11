
import React, { useContext, useState } from 'react'
import { YoutubeContext } from '../../Context/YouTubeContext'
import { HeaderStyle, Input, SearchBtn, SubNav } from './HeaderStyle'
import { Link } from 'react-router-dom'



const Header = () => {

    const [MainBodyData, setMainBodyData] = useContext(YoutubeContext)

    const onSearch = (e) => {
        const { value } = e.target;
        let res = MainBodyData.filter((val) => val.chanelName.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
        
        setMainBodyData(res);
    }



    return (


        <>
            <HeaderStyle>
                <HeaderStyle.Menu />
                <Link to='/YouTube' >
                    <HeaderStyle.Logo />
                </Link>
                <Input placeholder='Введите запрос' onChange={(e) => onSearch(e)} />
                <SearchBtn>
                    <SearchBtn.Search />
                </SearchBtn>
                <SubNav>
                    <SubNav.Camera />
                    <SubNav.MainMenu />
                    <SubNav.Bang />
                    <SubNav.Avatar />
                </SubNav>
            </HeaderStyle>
        </>


    )
}

export default Header 