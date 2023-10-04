import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { addMovie } from "../../../apis/movieAPI";

export default function AddMovie() {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      tenPhim: "",
      biDanh: "",
      moTa: "",
      hinhAnh: "",
      trailer: "",
      ngayKhoiChieu: "",
    },
  });

  const { mutate: onSubmit } = useMutation({
    mutationFn: (values) => {
      const formData = new FormData();
      formData.append("tenPhim", values.tenPhim);
      formData.append("biDanh", values.biDanh);
      formData.append("moTa", values.moTa);
      formData.append("hinhAnh", values.hinhAnh[0]);
      formData.append("trailer", values.trailer);
      formData.append("ngayKhoiChieu", values.ngayKhoiChieu);
      formData.append("maNhom", "GP01");

      return addMovie(formData);
    },
    onSuccess: () => {
      // đóng modal hoặc chuyển trang
      //
    },
  });

  const hinhAnh = watch("hinhAnh");

  const [imgPreview, setImgPreview] = useState("");

  useEffect(() => {
    // chạy vào useEfect callback khi giá trị hình ảnh thay đổi
    const file = hinhAnh?.[0];

    if (!file) return;

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = (evt) => {
      setImgPreview(evt.target.result);
    };
  }, [hinhAnh]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input placeholder="Tên Phim" {...register("tenPhim")} />
      </div>
      <div>
        <input placeholder="Bí Danh" {...register("biDanh")} />
      </div>
      <div>
        <input placeholder="Mô Tả" {...register("moTa")} />
      </div>
      <div>
        <input type="file" placeholder="Hình Ảnh" {...register("hinhAnh")} />
        {imgPreview && (
          <div>
            <img src={imgPreview} width={200} height={200} />
          </div>
        )}
      </div>
      <div>
        <input placeholder="Trailer" {...register("trailer")} />
      </div>
      <div>
        <input
          type="date"
          placeholder="Ngày Khởi chiếu"
          {...register("ngayKhoiChieu", {
            setValueAs: (value) => {
              return dayjs(value).format("DD/MM/YYYY");
            },
          })}
        />
      </div>
      <button>Thêm phim</button>
    </form>
  );
}
