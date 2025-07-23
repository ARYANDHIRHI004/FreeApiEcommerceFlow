import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../stores/useAuth";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const { authUser, isLoggingIn, loginUser } = useAuth();

  const onsubmitLogin = (data) => {
    loginUser(data);
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col">
        <legend className=" text-3xl mb-1 fieldset-legend">Login</legend>
      <div>
        <fieldset className=" text-[10px] fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
          <form
            className="flex flex-col w-80 p-5 rounded-2xl"
            action={handleSubmit(onsubmitLogin)}
          >
            <div className="flex flex-col mb-4">
              <label className="label" htmlFor="username">Username:</label>
              <input
                className="input"
                type="text"
                id="username"
                {...register("username", { required: true })}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="label" htmlFor="password">Password:</label>
              <input
                className="input"
                type="password"
                id="password"
                {...register("password", { required: true })}
              />
            </div>
            <button
              className="btn btn-primary mt-4 flex items-center justify-center"
              type="submit"
            >
              {
                isLoggingIn ? <span class="loading loading-dots loading-sm"></span>: "Login"
              }
            </button>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default LoginPage;
