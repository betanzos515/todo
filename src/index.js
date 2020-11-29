//hacemos las importaciones necesarias para que trabajemos con los modulos'
import './styles.css';
import {Todo , TodoList} from './classes'; //aqui ya no se especifica el archivo index por que lo busca por defecto
import { crearTodoHTML } from './js/componentes';
 
export const todoList = new TodoList();

//Como se mejora una funcion de flecha a continuacion pondre el antes de como sería
todoList.todos.forEach(crearTodoHTML) ;

//todoList.todos.forEach(todo => crearTodoHTML(todo)); aqui todavia seguimos mandando el parametro en la función.

const newTodo = new Todo('aprendiendo dart');
//todoList.todos[0].imp
console.log('todos', todoList.todos);

