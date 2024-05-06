import React from "react";
import Header from "../components/Common/Header";
import MainComponent from "../components/LandingPage/MainComponent";
import Footer from "../components/Common/Footer";

function HomePage(){
    return(
        <div className="home-page-container">
             <Header/>
             <MainComponent/>
             {/* <Footer/> */}
        </div>
    )
}
export default HomePage;