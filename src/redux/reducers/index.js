import { combineReducers } from "redux";

import postsReducer from "./posts";
import authReducer from "./auth";
import communityReducer from "./community";
import moderationReducer from "./moderation";
import userReducer from "./user";
import adminReducer from "./admin";
import vehicleReducer from "./vehicle";
import parkingReducer from "./parking";
import bookingReducer from "./booking";
import { paymentReducer } from "./payment";

const rootReducer = combineReducers({
  payment: paymentReducer,
  posts: postsReducer,
  parkings:parkingReducer,
  auth: authReducer,
  community: communityReducer,
  moderation: moderationReducer,
  user: userReducer,
  admin: adminReducer,
  vehicle:vehicleReducer,
  bookings:bookingReducer
});

export default rootReducer;
