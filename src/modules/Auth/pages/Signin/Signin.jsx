import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { Navigate } from "react-router-dom";
import { object, string } from "yup";
import { signin } from "../../../../apis/userAPI";
import { useUserContext } from "../../../../contexts/UserContext/UserContext";

const signinSchema = object({
  taiKhoan: string().required("Tài khoản không được để trống"),
  matKhau: string()
    .required("Mật khẩu không được để trống")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Mật khẩu ít nhất 8 kí tự, 1 kí tự hoa, 1 kí tự thường và 1 số"
    ),
});

export default function Signin() {
  const { currentUser, handleSignin: onSigninSuccess } = useUserContext();

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
    handleSignin(values);
  };

  // currentUser khác null => user đã đăng nhập => điều hướng về Home
  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1>Signin</h1>

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
      </form>
    </div>
  );
}
