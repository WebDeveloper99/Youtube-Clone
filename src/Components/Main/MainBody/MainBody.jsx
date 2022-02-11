

import React, {  useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { YoutubeContext } from '../../../Context/YouTubeContext';
import { ImageFullData } from '../../../Data/Data';
import './MainBodyStyle'
import { Body, Title } from './MainBodyStyle';

const MainBody = () => {
    const [MainBodyData, setMainBodyData] = useContext( YoutubeContext )

    return (
        <div>
            <Body>
                {
                    MainBodyData.map((value, index) => {
                        return (
                            <div key={index}>
                                <Link to={`${value.chanelName}`} >
                                <Body.BodyItem>
                                    {<img src={value.img} />}
                                    <Title>
                                        <Title.Icon>
                                            {<img src={value.avatar} />}
                                        </Title.Icon>
                                        <Title.Text>
                                            {value.title}
                                            <Title.ChanelName>
                                                {value.chanelName}
                                            </Title.ChanelName>
                                            <Title.Date>
                                                <br/>
                                                {value.date}
                                            </Title.Date>
                                        </Title.Text>
                                    </Title>
                                </Body.BodyItem>
                                </Link>
                            </div>
                        )

                    })
                }
            </Body>
        </div>
    )
}

export default MainBody
