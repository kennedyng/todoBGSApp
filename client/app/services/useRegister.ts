import React from "react";

import useSWRMutation from "swr/mutation";
import { User } from "../models/indext";
import { registerUser } from "@/lib/server";

const useRegister = () => {
  return useSWRMutation(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/auth/register`,
    registerUser
  );
};

export default useRegister;
