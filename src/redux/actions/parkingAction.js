import * as api from "../api/parkingAPI";
import * as types from "../constants/parkingConstant";

export const searchParkings = (place, latitude, longitude, type,outTime, inTime) => async (dispatch) => {
  try {
    console.log(outTime);
    const { error, data } = await api.searchParkings(place,latitude, longitude, type, outTime,inTime);
 
    if (error) {
      throw new Error(error);
    }
    console.log(data);

    dispatch({
      type: types.SEARCH_PARKINGS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: types.SEARCH_PARKINGS_FAIL,
      payload: error.message,
    });
  }
};
// parkingActions.js


export const getParkingAction = (id) => async (dispatch) => {
  try {
    console.log("testoing..1");
    const { error, data } = await api.getParking(id);
    console.log(data.data);

    if (error) {
      throw new Error(error);
    }

    dispatch({
      type: types.GET_PARTICULAR_PARKING_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_PARTICULAR_PARKING_FAIL,
      payload: error.message,
    });
  }
};


export const getParkingById = (parkingId) => ({
  type: types.GET_PARKING_BY_ID,
  payload: parkingId,
});

export const selecetedParking = (data) => ({
  type: types.SELECTED_PARKING_SAVED,
  payload: data,
});



// export const followUserAndFetchData =
//   (toFollowId, currentUser) => async (dispatch) => {
//     try {
//       await dispatch(followUserAction(toFollowId));
//       await dispatch(getPublicUsersAction());
//       if (currentUser) {
//         await dispatch(getPostsAction());
//         await dispatch(getUserAction(currentUser._id));
//         await dispatch(getSavedPostsAction());
//       }
//     } catch (error) {
//       dispatch({
//         type: types.CHANGE_FOLLOW_STATUS_FAIL,
//         payload: "Failed to follow user",
//       });
//     }
//   };
