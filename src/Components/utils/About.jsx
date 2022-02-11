import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { myComp } from '../../Data/Data';

import { Body } from '../Main/MainBody/MainBodyStyle';

const About = () => {


const navigate = useNavigate();
const params = useParams()
    return (
        <Body>
            <h1>This is About Page</h1>
            {
                myComp.map((value)=>{
                    return(
                        <h2 onClick={()=>navigate(`/pages/:${value.id}`)} >{value.id}.{value.title}</h2>
                    )
                })
            }
        </Body>
    )
}

export default About


