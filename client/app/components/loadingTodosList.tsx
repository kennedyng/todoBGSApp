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
import { Skeleton } from "@/components/ui/skeleton";

const LoadingTodosList = async () => {
  const todos = await getTodos();
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-4 w-[250px]" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-[250px]" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table className="flex flex-col gap-2">
          <TableCaption>
            <Skeleton className="h-4 w-[250px]" />
          </TableCaption>
          <Skeleton className="h-10 w-[250px]" />
          <TableBody>
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default LoadingTodosList;
