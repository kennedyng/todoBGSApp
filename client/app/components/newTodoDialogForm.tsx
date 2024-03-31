import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MdAdd } from "react-icons/md";
import TodoForm from "./todoForm";

const NewTodoDialogForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"}>
          <MdAdd className="w-5 h-5" /> Add New Todo Task
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Todo Task</DialogTitle>
          <DialogDescription>
            Kindly Provide the Task you wish todo
          </DialogDescription>
        </DialogHeader>
        <TodoForm />
      </DialogContent>
    </Dialog>
  );
};

export default NewTodoDialogForm;
