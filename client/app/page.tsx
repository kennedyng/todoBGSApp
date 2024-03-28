import Image from "next/image";
import TodoList from "./components/todoList";
import { Button } from "@/components/ui/button";
import NewTodoDialogForm from "./components/newTodoDialogForm";

export default function Home() {
  return (
    <main>
      <h1 className="text-center text-3xl py-20">
        <span className="text-primary font-bold">BGS </span>
        TODO <span className="text-primary font-bold">APP</span>
      </h1>

      <div className="flex flex-col items-center">
        <div className="w-full lg:w-2/3">
          <div className="my-4 text-end">
            <NewTodoDialogForm />
          </div>
          <TodoList />
        </div>
      </div>
    </main>
  );
}
