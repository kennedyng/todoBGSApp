import { User } from "@/app/models/indext";
import { CustomError } from "../exeception";

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
