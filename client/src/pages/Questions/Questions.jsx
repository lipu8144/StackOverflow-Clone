import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
// import '../../App.css'

const Questions = ({ sharedData, setSharedData }) => {
  return (
    <>
      <div className="home-container-1" onClick={() => setSharedData(!sharedData)}>
        <LeftSidebar sharedData={sharedData} />
        <div className="home-container-2">
          <HomeMainbar />
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default Questions;
