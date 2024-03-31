"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import useAddTodo from "../services/useAddTodo";
import { revalidatePath, revalidateTag } from "next/cache";
import { revalidateTodos } from "@/lib/actions";
import { TodoType } from "../models/indext";
import moment from "moment";

//validation schema
const FormSchema = z.object({
  task: z.string({ required_error: "Task is Required" }),
});

const TodoForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      task: "",
    },
  });

  const { trigger, isMutating } = useAddTodo();

  function onSubmit({ task }: z.infer<typeof FormSchema>) {
    trigger(
      { task },
      {
        onSuccess: async (data) => {
          toast.success("successfully created", {
            description: data.task,
          });
          await revalidateTodos();
        },
      }
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <FormField
          control={form.control}
          name="task"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Todo Task</FormLabel>
              <FormControl>
                <Input
                  className="h-[50px]"
                  placeholder="Have a staring contest with a pet or a houseplant."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">
          {isMutating ? (
            <Loader2 className="w-7 h-7 animate-spin" />
          ) : (
            "Create Todo Task"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default TodoForm;
