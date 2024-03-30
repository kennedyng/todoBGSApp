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
import { MdMenu } from "react-icons/md";

interface Props {
  id: string;
}
const ActionTodoMenu: FC<Props> = ({ id }) => {
  const deleteTodoWithId = deleteTodo.bind(null, id);

  const handleDeleteTodo = async () => {
    await deleteTodoWithId();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"icon"} variant={"outline"} className="rounded-full">
          <MdMenu className="text-white w-5 h-7" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem onClick={handleDeleteTodo}>Delete</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionTodoMenu;
