import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import TodoModal from "./TodoModal";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <TodoModal />
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient rounded-xl w-full h-full p-[5px]">
        {/* <div className="bg-white font-2xl font-bold rounded-xl w-full p-3 flex justify-center items-center">
          <p>There is no task pending</p>
        </div> */}

        <div className="bg-white w-full h-full p-5 rounded-lg space-y-2">
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
