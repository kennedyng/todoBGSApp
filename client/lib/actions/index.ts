"use server";
import { revalidateTag } from "next/cache";
import { auth } from "../auth";
import { CustomError } from "../exeception";

export async function revalidateTodos() {
  revalidateTag("todos");
}

export async function deleteTodo(id: string) {
  const authHeader = await auth();
  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/todo/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authHeader?.user.token}`,
    },
  });
  if (!res.ok) {
    throw new CustomError("Failed to delete Todo", res.status, res.json());
  }

  revalidateTag("todos");
}

export async function updateTodo(id: string, formData: FormData) {
  const authHeader = await auth();
  const rawFormData = {
    updatedTodo: formData.get("task"),
  };

  console.log("todo", rawFormData);
  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/todo/edit/${id}?task=${rawFormData.updatedTodo}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authHeader?.user.token}`,
      },
    }
  );
  if (!res.ok) {
    throw new CustomError(
      "Failed to update to id:" + id,
      res.status,
      res.json()
    );
  }

  revalidateTag("todos");

  return await res.json();
}
