import fetcher from "./fetcher";

export async function getTicketRoms(showtimeId) {
  try {
    const response = await fetcher.get("QuanLyDatVe/LayDanhSachPhongVe", {
      params: {
        MaLichChieu: showtimeId,
      },
    });

    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}
