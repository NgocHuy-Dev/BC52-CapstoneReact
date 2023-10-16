import fetcher from "./fetcher";

export async function getBanners() {
  try {
    const response = await fetcher.get("/QuanLyPhim/LayDanhSachBanner");
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

export async function getMovies() {
  try {
    const response = await fetcher.get("/QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: "GP01",
      },
    });
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}
// lấy danh sách phân trang
export async function getPagesItem(page) {
  try {
    const response = await fetcher.get("/QuanLyPhim/LayDanhSachPhimPhanTrang", {
      params: {
        maNhom: "GP01",
        soTrang: page,
        soPhanTuTrenTrang: "8",
      },
    });
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}

// export async function getPagesInf() {
//   try {
//     const response = await fetcher.get("/QuanLyPhim/LayDanhSachPhimPhanTrang", {
//       params: {
//         maNhom: "GP01",
//       },
//     });
//     return response.data?.content.totalPages;
//   } catch (error) {
//     throw error.response?.data.content.totalPages;
//   }
// }

export async function getMovieDetails(movieId) {
  try {
    const response = await fetcher.get("/QuanLyPhim/LayThongTinPhim", {
      params: {
        MaPhim: movieId,
      },
    });
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

export async function addMovie(movie) {
  try {
    const response = await fetcher.post(
      "/QuanLyPhim/ThemPhimUploadHinh",
      movie
    );
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}
