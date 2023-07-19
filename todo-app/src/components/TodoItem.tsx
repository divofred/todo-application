// src/coomponents/TodoItem.tsx
interface ItemTodo {
  todo: any;
  editTodoItem: FunctionStringCallback;
  deleteTodoItem: FunctionStringCallback;
}
function TodoItem({ todo, editTodoItem, deleteTodoItem }: ItemTodo) {
  return (
    <>
      <div className="todoItem">
        <div>{todo.attributes.todoText}</div>
        <div>
          <i>
            <button className="bg-default" onClick={() => editTodoItem(todo)}>
              Edit
            </button>
          </i>
          <i>
            <button className="bg-danger" onClick={() => deleteTodoItem(todo)}>
              Del
            </button>
          </i>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
