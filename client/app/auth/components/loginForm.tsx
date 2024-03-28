"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { ReactNode } from "react";
import { Input } from "@/components/ui/input";

//validation schema
const FormSchema = z
  .object({
    email: z.string({ required_error: "email is required" }).email(),
    password: z
      .string()
      .min(8, "The password must be at least 8 characters long")
      .max(32, "The password must be a maximun 32 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
      ),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

//user registration form
const LoginForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit({ email, password }: z.infer<typeof FormSchema>) {}

  let alertContent: ReactNode | null = null;

  return (
    <div className=" flex  flex-col gap-2  shadow-lg w-full md:w-[450px] rounded-md top p-10">
      <div className="flex flex-row justify-center gap-[2px] items-baseline">
        <div className="font-bold text-center">Register</div>
        <Image
          height={40}
          width={40}
          src={""}
          alt="band"
          className="w-[40px] h-[40px]"
        />
      </div>
      <p className="text-black  text-center ">Create new account</p>

      {alertContent}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="kennedyngosachanda@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="**********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="**********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="h-[45px] bg-primary-main text-white rounded-lg"
          >
            register
          </Button>
        </form>
      </Form>
      <p>
        Already have an account?
        <Link href="/user/login">
          <span className="text-yellow font-bold">Login</span>
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
