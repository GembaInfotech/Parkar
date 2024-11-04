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
import WeHelpYou from "./pages/WeHelpYou/WeHelpYou";
import HowDoesItWork from "./pages/HowDoesItWork";
import Dashboard from "./pages/Dashboard";
import ResetPasswordRedirect from "./components/resetPassword/ResetpasswordRedirect";
import GInfo from "./pages/WeHelpYou/ButtonData/GInfo";
import PAccount from "./pages/WeHelpYou/ButtonData/PAccount";
import ACarParks from "./pages/WeHelpYou/ButtonData/ACarParks";
import AProducts from "./pages/WeHelpYou/ButtonData/AProducts";
import PBooking from "./pages/WeHelpYou/ButtonData/PBooking";
import FAQ from "./pages/WeHelpYou/ButtonData/FAQ";
import Que1PA from "./pages/WeHelpYou/ButtonData/PAccountQue/Que1PA";
import Que2PA from "./pages/WeHelpYou/ButtonData/PAccountQue/Que2PA";
import Que3PA from "./pages/WeHelpYou/ButtonData/PAccountQue/Que3PA";
import Que4PA from "./pages/WeHelpYou/ButtonData/PAccountQue/Que4PA";
import Que5PA from "./pages/WeHelpYou/ButtonData/PAccountQue/Que5PA";
import Que6PA from "./pages/WeHelpYou/ButtonData/PAccountQue/Que6PA";
import Que7PA from "./pages/WeHelpYou/ButtonData/PAccountQue/Que7PA";
import Que8PA from "./pages/WeHelpYou/ButtonData/PAccountQue/Que8PA";
import Que9PA from "./pages/WeHelpYou/ButtonData/PAccountQue/Que9PA";
import Que10PA from "./pages/WeHelpYou/ButtonData/PAccountQue/Que10PA";
import Que11PA from "./pages/WeHelpYou/ButtonData/PAccountQue/Que11PA";
import Que1ACP from "./pages/WeHelpYou/ButtonData/ACarParksQue/Que1ACP";
import Que2ACP from "./pages/WeHelpYou/ButtonData/ACarParksQue/Que2ACP";
import Que3ACP from "./pages/WeHelpYou/ButtonData/ACarParksQue/Que3ACP";
import Que1AP from "./pages/WeHelpYou/ButtonData/AProductsQue/Que1AP";
import Que2AP from "./pages/WeHelpYou/ButtonData/AProductsQue/Que2AP";
import Que3AP from "./pages/WeHelpYou/ButtonData/AProductsQue/Que3AP";
import Que1PB from "./pages/WeHelpYou/ButtonData/PBookingQue/Que1PB";
import Que2PB from "./pages/WeHelpYou/ButtonData/PBookingQue/Que2PB";
import Que3PB from "./pages/WeHelpYou/ButtonData/PBookingQue/Que3PB";
import Que4PB from "./pages/WeHelpYou/ButtonData/PBookingQue/Que4PB";
import Que5PB from "./pages/WeHelpYou/ButtonData/PBookingQue/Que5PB";
import Que6PB from "./pages/WeHelpYou/ButtonData/PBookingQue/Que6PB";
import Que1FAQ from "./pages/WeHelpYou/ButtonData/FAQsQue/Que1FAQ";
import Que2FAQ from "./pages/WeHelpYou/ButtonData/FAQsQue/Que2FAQ";
import Que3FAQ from "./pages/WeHelpYou/ButtonData/FAQsQue/Que3FAQ";
import Que4FAQ from "./pages/WeHelpYou/ButtonData/FAQsQue/Que4FAQ";
import Que5FAQ from "./pages/WeHelpYou/ButtonData/FAQsQue/Que5FAQ";
import Que6FAQ from "./pages/WeHelpYou/ButtonData/FAQsQue/Que6FAQ";
import Que7FAQ from "./pages/WeHelpYou/ButtonData/FAQsQue/Que7FAQ";
import Que8FAQ from "./pages/WeHelpYou/ButtonData/FAQsQue/Que8FAQ";
import Que9FAQ from "./pages/WeHelpYou/ButtonData/FAQsQue/Que9FAQ";
import Que10FAQ from "./pages/WeHelpYou/ButtonData/FAQsQue/Que10FAQ";
import Que11FAQ from "./pages/WeHelpYou/ButtonData/FAQsQue/Que11FAQ";
import Que1GI from "./pages/WeHelpYou/ButtonData/GInfoQue/Que1GI";
import Common from "./pages/WeHelpYou/ButtonData/PAccountQue/Common";




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
    path: "/GInfo",
    element: <GInfo/>,
  },
  {
    path: "/PAccount",
    element: <PAccount/>,
  },
  {
    path: "/ACarParks",
    element: <ACarParks/>,
  },
  {
    path: "/AProducts",
    element: <AProducts/>,
  },
  {
    path: "/PBooking",
    element: <PBooking/>,
  },
  {
    path: "/FAQ",
    element: <FAQ/>,
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
  {
    path: "/src/pages/WeHelpYou/ButtonData/PAccountQue/Common.jsx",
    element: <Common />,
  },
  {
    path: "/que1.1",
    element: <Que1PA />,
  },
  {
    path: "/que2.1",
    element: <Que2PA />,
  },
  {
    path: "/que3.1",
    element: <Que3PA/>,
  },
  {
    path: "/que4.1",
    element: <Que4PA />,
  },
  {
    path: "/que5.1",
    element: <Que5PA/>,
  },
  {
    path: "/que6.1",
    element: <Que6PA/>,
  },
  {
    path: "/que7.1",
    element: <Que7PA/>,
  },
  {
    path: "/que8.1",
    element: <Que8PA/>,
  },
  {
    path: "/que9.1",
    element: <Que9PA />,
  },
  {
    path: "/que10.1",
    element: <Que10PA />,
  },
  {
    path: "/que11.1",
    element: <Que11PA />,
  },
  {
    path: "/que1.2",
    element: <Que1ACP />,
  },
  {
    path: "/que2.2",
    element: <Que2ACP />,
  },
  {
    path: "/que3.2",
    element: <Que3ACP />,
  },
  {
    path: "/que1.3",
    element: <Que1AP />,
  },
  {
    path: "/que2.3",
    element: <Que2AP />,
  },
  {
    path: "/que3.3",
    element: <Que3AP />,
  },
  {
    path: "/que1.4",
    element: <Que1PB />,
  },
  {
    path: "/que2.4",
    element: <Que2PB />,
  },
  {
    path: "/que3.4",
    element: <Que3PB />,
  },
  {
    path: "/que4.4",
    element: <Que4PB />,
  },
  {
    path: "/que5.4",
    element: <Que5PB />,
  },
  {
    path: "/que6.4",
    element: <Que6PB />,
  },
  {
    path: "/que1.5",
    element: <Que1FAQ />,
  },
  {
    path: "/que2.5",
    element: <Que2FAQ />,
  },
  {
    path: "/que3.5",
    element: <Que3FAQ />,
  },
  {
    path: "/que4.5",
    element: <Que4FAQ />,
  },
  {
    path: "/que5.5",
    element: <Que5FAQ />,
  },
  {
    path: "/que6.5",
    element: <Que6FAQ />,
  },
  {
    path: "/que7.5",
    element: <Que7FAQ />,
  },
  {
    path: "/que8.5",
    element: <Que8FAQ />,
  },
  {
    path: "/que9.5",
    element: <Que9FAQ />,
  },
  {
    path: "/que10.5",
    element: <Que10FAQ />,
  },
  {
    path: "/que11.5",
    element: <Que11FAQ />,
  },
  {
    path: "/que1.0",
    element: <Que1GI />,
  },
];
