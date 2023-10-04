// import {
//   GET_MOVIES_FULFILLED,
//   GET_MOVIES_PENDING,
//   GET_MOVIES_REJECTED,
// } from "../constants/showingConstants";

// const initState = {
//   movies: [],
//   isLoading: false,
//   error: null,
// };

// const movieReducer = (state = initState, action) => {
//   switch (action.type) {
//     case GET_MOVIES_PENDING: {
//       return { ...state, isLoading: true };
//     }

//     case GET_MOVIES_FULFILLED: {
//       return { ...state, movies: action.payload, isLoading: false };
//     }

//     case GET_MOVIES_REJECTED: {
//       return { ...state, isLoading: false, error: action.error };
//     }
//     default:
//       return state;
//   }
// };

// export default movieReducer;
