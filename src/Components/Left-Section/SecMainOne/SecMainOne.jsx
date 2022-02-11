




import React, { useContext } from 'react'

import { YoutubeContext } from '../../../Context/YouTubeContext'

import { SecPodpsStyle, Link, SecIcon, SecTitle } from '../SecHeader/SecHeaderOne/SecHeaderOneStyle'


const SecMainOne = () => {

    const [SecMainOneData, setSecMainOneData] = useContext(YoutubeContext)


    return (
        <div>
            <SecPodpsStyle>
                podpiska
            </SecPodpsStyle>
            {
                SecMainOneData.map((value, index) => {
                    return (
                        <div key={index}>
                            {
                                <Link to={`${value.chanelName}`} >
                                    <SecIcon>
                                        {<img src={value.avatar} />}
                                    </SecIcon>
                                    <SecTitle>
                                        {value.chanelName}
                                    </SecTitle>
                                </Link>
                            }
                        </div>
                    )
                })
            }
        </div>
    )

}

export default SecMainOne




