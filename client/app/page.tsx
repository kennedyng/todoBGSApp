import Image from "next/image";
import TodoList from "./components/todoList";
import { Button } from "@/components/ui/button";
import NewTodoDialogForm from "./components/newTodoDialogForm";
import { signOut } from "next-auth/react";
import Nav from "@/components/shared/nav";
import { Suspense } from "react";
import LoadingTodosList from "./components/loadingTodosList";

export default function Home() {
  return (
    <main>
      <Nav />
      <div>
        <h1 className="text-center py-4">
          <span className="text-primary font-bold">
            <span className="text-5xl">S</span>
            <span className="text-2xl">IMPLE</span>{" "}
          </span>
          <span className="text-2xl"> TODO LIST</span>
          <span className="text-primary font-bold text-2xl"> APP</span>
        </h1>
        <p className="text-center text-muted">
          Create and manage your todo task in an modern way, lets go!!!
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-full lg:w-2/3">
          <div className="my-4 text-end">
            <NewTodoDialogForm />
          </div>
          <Suspense fallback={<LoadingTodosList />}>
            <TodoList />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
