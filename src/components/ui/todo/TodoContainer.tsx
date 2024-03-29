import { useGetTodosQuery } from "@/redux/api/api";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import TodoModal from "./TodoModal";
import { useState } from "react";

const TodoContainer = () => {
  // const { todos } = useAppSelector((state) => state.todos);

  const [priority, setPriority] = useState("");
  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);
  console.log(priority);
  if (isLoading) {
    return <p>Loading ...</p>;
  }
  return (
    <div>
      <div className="flex justify-between mb-3">
        <TodoModal />
        <TodoFilter priority={priority} setPriority={setPriority}></TodoFilter>
      </div>
      <div className="bg-primary-gradient rounded-xl w-full h-full p-[5px] ">
        <div className="bg-white w-full h-full p-5 rounded-lg space-y-3">
          {todos?.data?.map((item) => (
            <TodoCard {...item}></TodoCard>
          ))}
        </div>

        {/* <div className="bg-white font-2xl font-bold rounded-xl w-full p-3 flex justify-center items-center">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
