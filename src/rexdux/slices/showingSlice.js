// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import fetcher from "../../apis/fetcher";

// // export const getMovies = createAsyncThunk(
// //   "post/getPosts",
// //   async (params, { dispatch, getState }) => {
// //     try {
// //       const reponse = await fetcher.get("/QuanLyPhim/LayDanhSachPhim", {
// //         params: {
// //           maPhim: params.maPhim || undefined,
// //           page: params.page || 1,
// //           limit: 10,
// //         },
// //       });
// //       return reponse.data;
// //     } catch (error) {
// //       throw error.response.data;
// //     }
// //   }
// // );

// // const movieSlice = createSlice({
// //   name: "page",
// //   initialState: {
// //     pages: [],
// //     isLoading: false,
// //     error: null,
// //   },
// //   reducers: {},
// //   // Bắt và xử lý các action được dispatch từ createAsyncThunk
// //   extraReducers: (builder) => {
// //     builder.addCase(getMovies.pending, (state) => {
// //       state.isLoading = true;
// //     });

// //     builder.addCase(getMovies.fulfilled, (state, action) => {
// //       state.isLoading = false;
// //       state.movies = action.payload;
// //     });

// //     builder.addCase(getMovies.rejected, (state, action) => {
// //       state.isLoading = false;
// //       state.error = action.error.message;
// //     });
// //   },
// // });

// // export default movieSlice.reducer;
// export const getMovies = createAsyncThunk(
//   "movies/getMovie",
//   async (params, { dispatch, getState }) => {
//     try {
//       const response = await fetcher.get("/QuanLyPhim/LayDanhSachPhim", {
//         params: {
//           maPhim: params.maPhim || undefined,
//           page: params.page || 1,
//           limit: 10,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       throw error.response.data;
//     }
//   }
// );

// const movieSlice = createSlice({
//   name: "movie",
//   initialState: {
//     movies: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(getMovies.pending, (state) => {
//       state.isLoading = true;
//     });

//     builder.addCase(getMovies.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.movies = action.payload;
//     });

//     builder.addCase(getMovies.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.error.message;
//     });
//   },
// });
