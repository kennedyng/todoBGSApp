"use client";

import React from "react";

import useSWRMutation from "swr/mutation";
import { User } from "../models/indext";
import { createTodo, registerUser } from "@/lib/server";

const useAddTodo = () => {
  return useSWRMutation(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1/todo/create`,
    createTodo
  );
};

export default useAddTodo;
