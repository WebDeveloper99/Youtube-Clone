



import React, {  createContext, useState } from "react";
import {MainNavbarData } from '../Data/Data';


export const YTBNavbarContext = createContext()



export const YTBNavbarContextProvider =({children})=>{

    
    const [ Mock, setMock ] = useState(
        MainNavbarData
    )



    return(
        <YTBNavbarContext.Provider value={[Mock,setMock]} >
            {children}
        </YTBNavbarContext.Provider>
    )
}