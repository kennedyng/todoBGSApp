import Image from "next/image";
import TodoList from "./components/todoList";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-center text-3xl py-20">
        <span className="text-primary font-bold">BGS </span>
        TODO LIST
      </h1>
      <TodoList />
    </main>
  );
}
