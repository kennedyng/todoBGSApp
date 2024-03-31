import Image from "next/image";
import React from "react";
import { noDataIcon } from "../img";

const NoTodoList = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={noDataIcon}
        alt="no data image"
        height={600}
        width={500}
        className="w-[150px] h-[200px]"
      />

      <h1 className="text-sm font-bold text-muted">
        Todo List is Empty Add Some Tasks
      </h1>
    </div>
  );
};

export default NoTodoList;
