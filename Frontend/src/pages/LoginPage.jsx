import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../stores/useAuth";
import { Button } from "@/components/ui/button";
import { Loader2Icon, LogIn  } from "lucide-react";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const { authUser, isLoggingIn, loginUser } = useAuth();

  const onsubmitLogin = (data) => {
    loginUser(data);
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h2 className="text-3xl mb-3 font-[600]">Login </h2>
      <div>
        <form
          className="flex flex-col border border-gray-300 w-80 p-5 rounded-2xl"
          action={handleSubmit(onsubmitLogin)}
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="username">Username:</label>
            <input
              className="border border-gray-300 p-2 rounded"
              type="text"
              id="username"
              {...register("username", { required: true })}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password">Password:</label>
            <input
              className="border border-gray-300 p-2 rounded"
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
          </div>
          <Button
            className=" text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            {isLoggingIn ? (
              <Loader2Icon  className="size-5 animate-spin" />
            ) : (
              <div className="flex items-center gap-1">
                Login
                <LogIn />
              </div>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
