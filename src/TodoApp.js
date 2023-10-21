import React from "react";
import { connect } from "react-redux";
import { addTodo, editTodo, deleteTodo } from "./actions";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp({ todos, onAdd, onEdit, onDelete }) {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onSubmit={onAdd} />
      <TodoList todos={todos} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (title) => dispatch(addTodo(title)),
    onEdit: (id, title) => dispatch(editTodo(id, title)),
    onDelete: (id) => dispatch(deleteTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
