import fetcher from "./fetcher";

// Detail API
// =============================================

export async function getMovieShowtimes(movieId) {
  try {
    const response = await fetcher.get("/QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        MaPhim: movieId,
      },
    });

    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}

export async function getMovieProfile(movieId) {
  try {
    const response = await fetcher.get("/QuanLyPhim/LayThongTinPhim", {
      params: {
        MaPhim: movieId,
      },
    });

    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}

// =============================================

// cimema info
// lấy thông tin (render logo)
export async function getCinemaLogo() {
  try {
    const response = await fetcher.get("/QuanLyRap/LayThongTinHeThongRap");
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}

// lấy danh sách rap theo mã hệ thống rạp (dịa chỉ các kiểu)
export async function getCinemaSystem(cinemaCode) {
  try {
    const response = await fetcher.get(
      "/QuanLyRap/LayThongTinCumRapTheoHeThong",
      {
        params: {
          maHeThongRap: cinemaCode,
        },
      }
    );
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}

// lây thông tin lịch chiếu theo hệ thống rạp
export async function getCinemaShowtimes(cinemaId) {
  try {
    const response = await fetcher.get(
      "/QuanLyRap/LayThongTinLichChieuHeThongRap",
      {
        params: {
          maHeThongRap: cinemaId,
        },
      }
    );
    return response.data?.content.lstCumRap;
  } catch (error) {
    throw error.response.data?.content.lstCumRap;
  }
}
