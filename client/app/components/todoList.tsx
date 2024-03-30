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

const TodoList = async () => {
  const todos = await getTodos();
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>MY Task List</CardTitle>
        <CardDescription>List of my todo tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>List of your todo Tasks</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>TASK</TableHead>
              <TableHead align="right" colSpan={1}>
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {todos.map(({ id, task }) => (
              <TableRow key={id}>
                <TableCell className="w-full">{task}</TableCell>
                <TableCell align="center">
                  <ActionTodoMenu id={id} />
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
