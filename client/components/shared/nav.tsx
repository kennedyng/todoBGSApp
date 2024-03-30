"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const Nav = () => {
  return (
    <div className="mt-8">
      <Button
        variant={"outline"}
        size={"sm"}
        onClick={() => signOut({ callbackUrl: "/auth/login" })}
      >
        Sign out
      </Button>
    </div>
  );
};

export default Nav;
