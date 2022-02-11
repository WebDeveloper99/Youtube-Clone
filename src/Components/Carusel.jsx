
import { Carousel, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import { Item } from './style';

import { YoutubeContext } from '../Context/YouTubeContext';
import React, { useContext, useState } from 'react';

const Slider = () => {

    const [data, setData] = useContext(YoutubeContext)
    console.log(data);
    return <div>
        <Row justify="center">
            <Col span={10} >
                <Carousel >
                    {
                        data.map((value) => {
                            return (
                                <Item>
                                    <img style={{ float: 'left' }} src={value.img} />
                                </Item>
                            )
                        })
                    }
                </Carousel>
            </Col>
        </Row>
    </div>;
};

export default Slider;
