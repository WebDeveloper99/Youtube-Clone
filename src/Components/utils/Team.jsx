

import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Body } from '../Main/MainBody/MainBodyStyle';



const About = (props) => {


const navigate = useNavigate();
const params = useParams();

console.log(props,'props');
console.log(params,'params');
    return (
        <Body>
            <h1>Dragon{params.id}</h1>
        </Body>
    )
}

export default About




