import React from "react";
import LoginForm from "../components/loginForm";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-full lg:w-1/3">
        <LoginForm />
      </div>
    </div>
  );
};

export default Page;
