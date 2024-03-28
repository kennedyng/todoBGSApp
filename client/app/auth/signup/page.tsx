import React from "react";
import SignUpFrom from "../components/siginUpForm";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-full lg:w-1/3">
        <SignUpFrom />
      </div>
    </div>
  );
};

export default Page;
