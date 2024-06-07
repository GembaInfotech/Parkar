// import * as types from "../constants/resetPasswordConstants"
// import { LOGOUT } from "../constants/authConstants";

// const initialState = {
//   forgot:{},
//   forgotPayload:{},
//   forgotError:null,
//   forgotSuccess:null,
//   fogotError:null

// };

// const resetpasswordReducer = (state = initialState, action) => {
//   const { type, payload } = action;
//   console.log(type, payload)

//   switch (type) {
//     case LOGOUT:
//       return {
//         ...state,
//         bookings:[],
//         booking:{},
//         bookingPayload:{},
//         bookingError:null
       
//       };
//     case types.FORGOT_SUCCESS:
//         return{
//             ...state,
//             forgotSuccess:payload?payload: null,
//             forgotError:null
//         } 
        
//     case types.FORGOT_FAIL:
//       return {
//         ...state,
//         forgotError: null,
//       };
  
    

   
//       default:
//       return state;
//   }
// };

// export default resetpasswordReducer
