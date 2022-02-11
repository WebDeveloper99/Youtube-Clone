


import React, { createContext, useState } from "react";
import { ImageFullData } from '../Data/Data';

import { YTBNavbarContextProvider } from "./YTBNavbarContext";
import { YTBSectionContextProvider } from "./YTBSectionContext";

export const YoutubeContext = createContext()



export const YoutubeContextProvider = ({ children }) => {


    const [Mock, setMock] = useState(
        ImageFullData,
    )



    return (
        <YoutubeContext.Provider value={[Mock, setMock]} >
            <YTBNavbarContextProvider>
                <YTBSectionContextProvider>
                    {children}
                </YTBSectionContextProvider>
            </YTBNavbarContextProvider>
        </YoutubeContext.Provider>
    )
}