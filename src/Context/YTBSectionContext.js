


import React, {  createContext, useState } from "react";
import { LeftSectionData } from '../Data/Data';


export const YTBSectionContext = createContext()



export const YTBSectionContextProvider =({children})=>{

    
    const [ Mock, setMock ] = useState(
        LeftSectionData, 
    )



    return(
        <YTBSectionContext.Provider value={[Mock,setMock]} >
            {children}
        </YTBSectionContext.Provider>
    )
}