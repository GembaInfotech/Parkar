import { lazy } from "react";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Post from "./pages/Post";
import OwnPost from "./pages/OwnPost";
import CommunityHome from "./pages/CommunityHome";
import Saved from "./pages/Saved";
import PublicProfile from "./pages/PublicProfile";
import AllCommunities from "./pages/AllCommunities";
import MyCommunities from "./pages/MyCommunities";
import Following from "./pages/Following";
import SignUp from "./pages/SignUp";
import MainPage from "./pages/MainPage";
import Vehicle from "./pages/Vehicle";
import SearchParking from "./pages/SearchParking";
import ParkingDetail from "./pages/parkingDetail";
import Checkout from "./pages/Checkout";
import Bookings from "./pages/Bookings";
import Payment from "./pages/Payment";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import ContactUs from "./pages/ContactUs";
import WeHelpYou from "./pages/WeHelpYou";
import HowDoesItWork from "./pages/HowDoesItWork";
import Dashboard from "./pages/Dashboard";
const ReportedPost = lazy(() => import("./pages/ReportedPost"));
const Moderator = lazy(() => import("./pages/Moderator"));
const DevicesLocations = lazy(() => import("./pages/DevicesLocations"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const EmailVerifiedMessage = lazy(() => import("./pages/EmailVerifiedMessage"));
const BlockDevice = lazy(() => import("./pages/BlockDevice"));
const LoginVerified = lazy(() => import("./pages/LoginVerified"));
const AccessDenied = lazy(() => import("./pages/AccessDenied"));
const NotFound = lazy(() => import("./pages/NotFound"));

export const privateRoutes = [
 
  {
    path: "/home",
    element: <Home />,
  },{
    path: "/booking",
    element: <Bookings />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/vehicles",
    element: <Vehicle />,
  },
  {
    path: "/post/:postId",
    element: <Post />,
  },
  {
    path: "/my/post/:postId",
    element: <OwnPost />,
  },
  {
    path: "/community/:communityName",
    element: <CommunityHome />,
  },
  {
    path: "/community/:communityName/reported-post",
    element: <ReportedPost />,
  },
  {
    path: "/community/:communityName/moderator",
    element: <Moderator />,
  },
  {
    path: "/saved",
    element: <Saved />,
  },
  {
    path: "/user/:userId",
    element: <PublicProfile />,
  },
  {
    path: "/communities",
    element: <AllCommunities />,
  },
  {
    path: "/my-communities",
    element: <MyCommunities />,
  },
  {
    path: "/following",
    element: <Following />,
  },
  {
    path: "/devices-locations",
    element: <DevicesLocations />,
  },
];
export const semiPrivateRoute = [
  
  {
    path: "/checkout",
    element: <Checkout />,
  }
  
];

export const publicRoutes = [
 
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/how-works",
    element: <HowDoesItWork />,
  },
  {
    path: "/help-you",
    element: <WeHelpYou />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/search",
    element: <SearchParking />,
  },
  {
    path: "/detail/:place",
    element: <ParkingDetail />,
  },
   {
    path: "/signup",
    element: <SignUp />,
  },
 
  
  {
    path: "/payment-success",
    element: <Payment />,
  },

  {
    path: "/auth/verify",
    element: <VerifyEmail />,
  },
  {
    path: "/email-verified",
    element: <EmailVerifiedMessage />,
  },
  {
    path: "/block-device",
    element: <BlockDevice />,
  },
  {
    path: "/verify-login",
    element: <LoginVerified />,
  },
  {
    path: "/access-denied",
    element: <AccessDenied />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
