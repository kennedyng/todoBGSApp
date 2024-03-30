"use server";
import { revalidateTag } from "next/cache";

export async function revalidateTodos() {
  revalidateTag("todos");
}

export async function deleteTodo(id: string) {
  console.log("deleting todo", id);
}
