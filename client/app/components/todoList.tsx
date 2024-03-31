import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTodos } from "@/lib/server";
import ActionTodoMenu from "./ActionTodoMenu";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import NoTodoList from "./NoTodoList";
import { auth } from "@/lib/auth";
import moment from "moment";
import { Button } from "@/components/ui/button";
import { MdDelete, MdEdit, MdMenu } from "react-icons/md";

const TodoList = async () => {
  const todos = await getTodos();

  if (!todos.length) {
    return <NoTodoList />;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-foreground">My List</CardTitle>
        <CardDescription>List of my todo tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>List of your todo Tasks</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>TASK</TableHead>
              <TableHead align="right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {todos.map(({ id, task, createDate }) => (
              <TableRow key={id}>
                <TableCell className="w-full text-xl text-foreground  font-medium">
                  <ul className="">
                    <li>
                      <div className="text-end text-xs text-muted-foreground">
                        {moment(new Date(createDate), "YYYYMMDD").fromNow()}
                      </div>
                    </li>
                    <li>
                      <span className="text-muted-foreground">{task}</span>
                    </li>
                  </ul>
                </TableCell>
                <TableCell align="right">
                  <ActionTodoMenu id={id} task={task} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TodoList;
