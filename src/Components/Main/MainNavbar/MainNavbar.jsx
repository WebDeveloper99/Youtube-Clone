

import React, { useContext, useState } from 'react'
import { YTBNavbarContext } from '../../../Context/YTBNavbarContext';
import { YoutubeContext } from '../../../Context/YouTubeContext';
import './MainNavbarStyle'
import { Navbar , Link} from './MainNavbarStyle';
const MainNavbar = () => {

    const [MainNavbarData, setMainNavbarData] = useContext(YTBNavbarContext)

    const [MainBodyData, setMainBodyData] = useContext(YoutubeContext)

    const [ data, setData ] = useState(MainBodyData)

    const onSearch = (value) => {
        
        const res = data.filter((item) => item.category.toLocaleLowerCase() == value.toLocaleLowerCase())

        setMainBodyData(res)
    }
    

    return (
        <div>
            {
                <Navbar>
                    {
                        MainNavbarData.map((value, index) => {
                            return (
                                <div key={index} >
                                    <div onClick={() => onSearch(value)} >
                                        <Link to={`/`} >
                                            {value}
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Navbar>
            }
        </div>
    )
}

export default MainNavbar

