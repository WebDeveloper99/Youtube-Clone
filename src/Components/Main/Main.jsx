
import React,{ useState } from "react";
import './MainStyle'
import MainBody from "./MainBody/MainBody";
import MainNavbar from "./MainNavbar/MainNavbar";
import { MainContainer } from "./MainStyle";
import { Routes, Route, useParams } from "react-router-dom";
import { myComp } from '../../Data/Data'







function Main(props) {

  
  return (
    <div>
      <MainContainer>
        <MainNavbar  />
        {
          myComp.map((value)=>{
            return(
              <Routes>
                <Route path={value.path} element={<value.comp/>}  />
              </Routes>
            )
          })
        }
      </MainContainer>

    </div>

  );
}

export default Main;