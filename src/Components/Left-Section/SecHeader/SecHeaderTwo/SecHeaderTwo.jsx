

import React, { useContext } from 'react'
import { SecItemStyle,Link, SecIcon, SecTitle } from '../SecHeaderOne/SecHeaderOneStyle'
import { YTBSectionContext } from '../../../../Context/YTBSectionContext'

const SecHeaderTwo = () => {


    const [SecHeaderTwoData, setSecHeaderTwoData] = useContext(YTBSectionContext)

    // console.log(SecHeaderTwoData.LeftSecHeader[1].SecHeaderTwo,'SecHeaderTwoData');
    
    return (
        <div>
            <hr/>
            {
                SecHeaderTwoData.LeftSecHeader[1].SecHeaderTwo.map((value,index) => {
                    return (
                        <div key={index}>
                            {
                                <Link to={`${value.title}`} >
                                    <SecIcon>
                                        <img src={value.icon}/>
                                    </SecIcon>
                                    <SecTitle>
                                        {value.title}
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

export default SecHeaderTwo