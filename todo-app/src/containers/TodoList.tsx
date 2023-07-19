// src/containers/TodoList.tsx
import TodoItem from '@/components/TodoItem';
interface ListTodo {
  todos: any;
  editTodoItem: any;
  deleteTodoItem: any;
}

function TodoList({ todos, editTodoItem, deleteTodoItem }: ListTodo) {
  return (
    <div className="todoListContainer">
      <div className="todosText">Todos</div>
      {todos
        ?.sort((a: any, b: any) =>
          b.attributes.createdAt.localeCompare(a.attributes.createdAt)
        )
        .map((todo: any) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              deleteTodoItem={deleteTodoItem}
              editTodoItem={editTodoItem}
            />
          );
        })}
    </div>
  );
}

export default TodoList;
