import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FC } from "react";
import { MdEdit } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { updateTodo } from "@/lib/actions";

interface Props {
  todoId: string;
}
const EditTodo: FC<Props> = ({ todoId }) => {
  const updateTodoWithId = updateTodo.bind(null, todoId);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} variant={"outline"} className="rounded-full">
          <MdEdit className="text-white w-5 h-7" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update The Task</DialogTitle>
          <DialogDescription>Kindly Provide updated task</DialogDescription>
        </DialogHeader>

        <form action={updateTodoWithId} className="flex flex-col gap-8">
          <Input
            name="task"
            id="task"
            className="h-[50px]"
            placeholder="Have a staring contest with a pet or a houseplant."
          />
          <Button type="submit">Update</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditTodo;
