//Referencias al html.

import { Todo } from "../classes";
import {todoList} from '../index.js';

const listaTodo = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const borrarCompletados = document.querySelector('.clear-completed');
const filters = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHTML = (todo)=>{
    
    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed':''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado)? 'checked' : ''}>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Rule the web">
    </li>
    `;
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    listaTodo.append(div.firstElementChild);
    return div.firstElementChild;
}

//Eventos
txtInput.addEventListener('keyup',(event)=>{
    if(event.keyCode === 13 && txtInput.value.length > 0){
        const todo = new Todo(txtInput.value);
        insertarTodo(todo);
    } 
});

function insertarTodo(todo){
    todoList.nuevoTodo(todo);
    crearTodoHTML(todo);
    txtInput.value = '';
}

listaTodo.addEventListener('click', (evento)=>{
   const nombreElemento = evento.target.localName;
   const todoElemento   = evento.target.parentElement.parentElement;
   const todoId         = todoElemento.getAttribute('data-id');

   if(  nombreElemento.includes('input')){ //Esto quiere decir que se dio click en el check
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed')
   
   }else if(nombreElemento.includes('button')){
       todoList.eliminarTodo(todoId);
       listaTodo.removeChild(todoElemento);
   }

   console.log(todoList);

});

borrarCompletados.addEventListener('click',()=>{
    todoList.eliminarCompletados();
    for(let i = listaTodo.children.length-1; i >= 0; i-- ){
        const elemento = listaTodo.children[i];
        if(elemento.classList.contains('completed')){
            listaTodo.removeChild(elemento);
        }
    }
    console.log(todoList);

});

filters.addEventListener('click',e=>{
    const filtro = e.target.text;
    if(!filtro){return;}
    anchorFiltros.forEach(element=> element.classList.remove('selected'));
    e.target.classList.add('selected');
    for(const elemento of listaTodo.children){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');
        switch(filtro){
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');
                }
                break;
            }
            
    }
});