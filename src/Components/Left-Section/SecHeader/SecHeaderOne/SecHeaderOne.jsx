

import React, { useContext, useState } from 'react'
import {Link, SecIcon, SecTitle } from '../SecHeaderOne/SecHeaderOneStyle'
import { YTBSectionContext } from '../../../../Context/YTBSectionContext'

const SecHeaderOne = () => {


    const [SecHeaderOneData, setSecHeaderOneData] = useContext(YTBSectionContext)

    console.log(SecHeaderOneData.LeftSecHeader[0].SecHeaderOne, 'SecHeaderOneData');

    return (
        <div>
            <hr />
            {
                SecHeaderOneData.LeftSecHeader[0].SecHeaderOne.map((value, index) => {
                    return (
                        <div key={index}>
                            {
                                <>
                                        <Link to={`${value.title}`} >
                                            <SecIcon>
                                                <img src={value.icon} />
                                            </SecIcon>
                                            <SecTitle>
                                                {value.title}
                                            </SecTitle>
                                        </Link>
                                </>
                            }
                        </div>
                    )
                })
            }
        </div>
    )

}

export default SecHeaderOne

