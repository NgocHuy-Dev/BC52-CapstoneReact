// import fetcher from "../../apis/fetcher";
// import {
//   GET_MOVIES_FULFILLED,
//   GET_MOVIES_PENDING,
//   GET_MOVIES_REJECTED,
// } from "../constants/postContants";

// export const getMovies = () => {
//   return async (dispatch, getState) => {
//     try {
//       dispatch({ type: GET_MOVIES_PENDING });
//       const reponse = await fetcher.get("/QuanLyPhim/LayDanhSachPhim");
//       dispatch({ type: GET_MOVIES_FULFILLED, payload: reponse.data });
//     } catch (error) {
//       dispatch({ type: GET_MOVIES_REJECTED, error: error.response.data });
//     }
//   };
// };
