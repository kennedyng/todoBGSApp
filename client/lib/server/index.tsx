import { TodoType, User } from "@/app/models/indext";
import { CustomError } from "../exeception";
import { getSession } from "next-auth/react";
import { auth } from "../auth";

export const registerUser = async (url: string, { arg }: { arg: User }) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new CustomError("Failed to Register", res.status, res.json());
  }

  return await res.json();
};

export const createTodo = async (
  url: string,
  { arg }: { arg: { task: string } }
) => {
  const session = await getSession();
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.user.token}`,
    },
  });

  if (!res.ok) {
    throw new CustomError("To add", res.status, res.json());
  }

  return await res.json();
};

export const getTodos = async (): Promise<TodoType[]> => {
  const session = await auth();
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/todo/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.user.token}`,
    },

    next: { tags: ["todos"] },
  });

  if (!res.ok) {
    throw new CustomError("To add", res.status, res.json());
  }
  return await res.json();
};

import { revalidateTag } from "next/cache";
