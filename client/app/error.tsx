"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-6">
      <h2 className="text-xl">Something went wrong!</h2>
      <div className="flex flex-row gap-4">
        <Button onClick={() => reset()}>Try again</Button>

        <Button variant={"outline"}>
          <Link href={"/auth/login"}>Restart</Link>
        </Button>
      </div>
    </div>
  );
}
