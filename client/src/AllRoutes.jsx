import React from "react";
import { Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home"
import Auth from "./pages/Auth/Auth"
import Questions from "./pages/Questions/Questions";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./pages/Questions/DisplayQuestion";
import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
import UserProfile from "./pages/UserProfile/UserProfile";
import ForgotPassword from "./pages/Auth/ForgotPassword";

const AllRoutes = ({ sharedData, setSharedData }) => {
  return (
    <Routes>
      <Route path="/" element={<Home sharedData={sharedData} />} />
      <Route path="/Auth" element={<Auth />} />
      <Route
        path="/questions"
        element={
          <Questions sharedData={sharedData} setSharedData={setSharedData} />
        }
      />
      <Route
        path="/AskQuestion"
        element={<AskQuestion sharedData={sharedData} />}
      />
      <Route path="/questions/:id" element={<DisplayQuestion />} />
      <Route path="/Tags" element={<Tags sharedData={sharedData} />} />
      <Route path="/Users" element={<Users sharedData={sharedData} />} />
      <Route
        path="/Users/:id"
        element={<UserProfile sharedData={sharedData} />}
      />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default AllRoutes;
