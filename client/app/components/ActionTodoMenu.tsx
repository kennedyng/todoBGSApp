"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteTodo } from "@/lib/actions";
import { FC } from "react";
import { MdDelete, MdEdit, MdMenu } from "react-icons/md";
import EditTodo from "./editTodo";

interface Props {
  id: string;
  task: string;
}
const ActionTodoMenu: FC<Props> = ({ id }) => {
  const deleteTodoWithId = deleteTodo.bind(null, id);

  const handleDeleteTodo = async () => {
    await deleteTodoWithId();
  };
  return (
    <div className="flex flex-row gap-2">
      <EditTodo todoId={id} />
      <Button
        onClick={() => handleDeleteTodo()}
        size={"icon"}
        variant={"outline"}
        className="rounded-full"
      >
        <MdDelete className="w-5 h-7 text-white" />
      </Button>
    </div>
  );
};

export default ActionTodoMenu;
