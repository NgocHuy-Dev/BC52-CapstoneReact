import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../../apis/userAPI";
import { Grid, Paper, Typography, TextField } from "@mui/material";
import { CusPaper, CusImage, CusButton, CusBackGr, Alert } from "./styles";
import bg from "../../../../assets/img/bg-signup.jpg";
import avt from "../../../../assets/img/sign-up.png";

const signupSchema = object({
  taiKhoan: string().required("Tài khoản không được để trống"),
  matKhau: string()
    .required("Mật khẩu không được để trống")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Mật khẩu ít nhất 8 kí tự, 1 kí tự hoa, 1 kí tự thường và 1 số"
    ),
  email: string()
    .required("Email không được để trống")
    .email("Email không đúng định dạng"),
  hoTen: string().required("Họ tên không được để trống"),
  soDt: string().required("Số điện thoại không được để trống"),
});

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      hoTen: "",
      soDt: "",
    },
    resolver: yupResolver(signupSchema),
    mode: "onTouched",
  });

  const {
    mutate: handleSignup,
    error,
    isLoading,
  } = useMutation({
    mutationFn: (payload) => signup(payload),
    onSuccess: () => {
      navigate("/sign-in");
    },
  });

  const navigate = useNavigate();

  const onSubmit = (values) => {
    // Gọi API đăng ký
    handleSignup(values);
  };

  return (
    <Grid container component="main">
      <Grid item xs={false} sm={4} md={7}>
        <CusBackGr src={bg} variant="square" />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <CusPaper>
          <CusImage src={avt} />
          <Typography component="h1" variant="h5">
            Đăng Ký
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* ===========Tài khoản =====  */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Tài Khoản"
              name="taiKhoan"
              autoComplete="email"
              autoFocus
              {...register("taiKhoan")}
            />
            {errors.taiKhoan && (
              <Alert variant="a">{errors.taiKhoan.message}</Alert>
            )}
            {/* ===========Mật khẩu =====  */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật Khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("matKhau")}
            />
            {errors.matKhau && (
              <Alert variant="a">{errors.matKhau.message}</Alert>
            )}
            {/* ===========Email =====  */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              {...register("email")}
            />
            {errors.email && <Alert variant="a">{errors.email.message}</Alert>}
            {/* ===========Họ tên =====  */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="hoTen"
              label="Họ Tên"
              type="text"
              {...register("hoTen")}
            />
            {errors.hoTen && <Alert variant="a">{errors.hoTen.message}</Alert>}
            {/* ===========số ddienj thoại =====  */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="soDt"
              label="Số Điện Thoại"
              type="text"
              {...register("soDt")}
            />
            {errors.soDt && <Alert variant="a">{errors.soDt.message}</Alert>}
            <CusButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isLoading}
            >
              Đăng Ký
            </CusButton>
          </form>
        </CusPaper>
      </Grid>
    </Grid>
    // <div>
    //   <h1>Signup</h1>

    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <div>
    //       <input placeholder="Tài Khoản" {...register("taiKhoan")} />
    //       {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
    //     </div>
    //     <div>
    //       <input placeholder="Mật khẩu" {...register("matKhau")} />
    //       {errors.matKhau && <p>{errors.matKhau.message}</p>}
    //     </div>
    //     <div>
    //       <input placeholder="Email" {...register("email")} />
    //       {errors.email && <p>{errors.email.message}</p>}
    //     </div>
    //     <div>
    //       <input placeholder="Họ Tên" {...register("hoTen")} />
    //       {errors.hoTen && <p>{errors.hoTen.message}</p>}
    //     </div>
    //     <div>
    //       <input placeholder="Số Điện Thoại" {...register("soDt")} />
    //       {errors.soDt && <p>{errors.soDt.message}</p>}
    //     </div>so

    //     <button type="submit" disabled={isLoading}>
    //       Đăng Ký
    //     </button>

    //     {error && <p>{error}</p>}
    //   </form>
    // </div>
  );
}

// MUI
{
  /* <TextField
  {...register("taiKhoan", { require: { value: true, message: "lỗi" } })}
  error={!!errors.taiKhoan}
  helperText={errors.taiKhoan?.message}
/>; */
}

// Đưa các thuộc tính và phương thức của object làm properties của tag hoặc component
// const obj = {name: "abc", email: "abc@gmail.com"}
// <input name={obj.name} email={obj.email} />
// <input {...obj} />
