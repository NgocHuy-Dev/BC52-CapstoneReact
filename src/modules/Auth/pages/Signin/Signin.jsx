import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { Navigate, useSearchParams } from "react-router-dom";
import { object, string } from "yup";
import { signin } from "../../../../apis/userAPI";
import { useUserContext } from "../../../../contexts/UserContext/UserContext";
import Swal from "sweetalert2";

import { Grid, Paper, Typography, TextField, Alert } from "@mui/material";
import { CusAlert, CusBackGr, CusButton, CusImage, CusPaper } from "./styles";
import avt from "../../../../assets/img/meme-khoc_33.webp";
import bg from "../../../../assets/img/bg-signin.jpg";

const signinSchema = object({
  taiKhoan: string().required("Tài khoản không được để trống"),
  matKhau: string().required("Mật khẩu không được để trống"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
  //   "Mật khẩu ít nhất 8 kí tự, 1 kí tự hoa, 1 kí tự thường và 1 số"
  // ),
});

export default function Signin() {
  const { currentUser, handleSignin: onSigninSuccess } = useUserContext();

  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    resolver: yupResolver(signinSchema),
    mode: "onTouched",
  });

  const {
    mutate: handleSignin,
    isLoading,
    error,
  } = useMutation({
    mutationFn: (payload) => signin(payload),
    onSuccess: (data) => {
      onSigninSuccess(data);
    },
  });

  const onSubmit = (values) => {
    Swal.fire("Đăng nhập thành công!", "", "success");
    handleSignin(values);
  };

  // currentUser khác null => user đã đăng nhập => điều hướng về Home
  if (currentUser) {
    const redirectTo = searchParams.get("redirectTo");
    return <Navigate to={redirectTo || "/"} replace />;
  }

  return (
    <Grid container component="main">
      <Grid item xs={12} sm={4} md={7}>
        <CusBackGr variant="square" src={bg} />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <CusPaper>
          <CusImage src={avt} />
          <Typography component="h1" variant="h5">
            Đăng Nhập
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Tài Khoản"
              name="taiKhoan"
              autoFocus
              {...register("taiKhoan")}
            />
            {errors.taiKhoan && (
              <CusAlert variant="a">{errors.taiKhoan.message}</CusAlert>
            )}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("matKhau")}
            />
            {errors.matKhau && (
              <CusAlert variant="a">{errors.matKhau.message}</CusAlert>
            )}
            <CusButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Đăng nhập
            </CusButton>
          </form>
        </CusPaper>
      </Grid>
    </Grid>
  );
  // <div >

  {
    /* <h1>Signin</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input placeholder="Tài Khoản" {...register("taiKhoan")} />
          {errors.taiKhoan && <p>{errors.taiKhoan.message}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Mật khẩu"
            {...register("matKhau")}
          />
          {errors.matKhau && <p>{errors.matKhau.message}</p>}
        </div>

        <button type="submit" disabled={isLoading}>
          Đăng Nhập
        </button>

        {error && <p>{error}</p>}
      </form> */
  }
  {
    /* </div> */
  }
  // );
}
