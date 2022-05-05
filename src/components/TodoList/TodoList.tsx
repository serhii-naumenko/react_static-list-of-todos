import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo__list">
    {
      todos.map((todo) => (
        <li className="todo__list-item" key={todo.id}>
          <TodoInfo
            title={todo.title}
            status={todo.completed}
            user={todo.user}
          />
        </li>
      ))
    }
  </ul>
);