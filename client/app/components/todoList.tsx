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
import ActionTodoMenu from "./ActionTodoMenu";

const TodoList = () => {
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
            <TableRow>
              <TableCell className="w-full">INV001</TableCell>
              <TableCell align="center">
                <ActionTodoMenu />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TodoList;
