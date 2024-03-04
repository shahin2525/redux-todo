import Container from "@/components/ui/Container";
import TodoContainer from "@/components/ui/todo/TodoContainer";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center text-3xl px-5 py-5">Todo page</h1>
      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default Todo;
