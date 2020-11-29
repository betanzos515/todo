(()=>{"use strict";function a(d){if(c[d])return c[d].exports;var e=c[d]={exports:{}};return b[d](e,e.exports,a),e.exports}var b={513:(a,b,c)=>{function d(a){l.nuevoTodo(a),k(a),g.value=""}c.d(b,{L:()=>l});class e{static fromJSON({tarea:a,id:b,completado:c,creado:d}){const f=new e(a);return f.id=b,f.completado=c,f.creado=d,f}constructor(a){this.tarea=a,this.id=new Date().getTime(),this.completado=!1,this.creado=new Date}}const f=document.querySelector(".todo-list"),g=document.querySelector(".new-todo"),h=document.querySelector(".clear-completed"),i=document.querySelector(".filters"),j=document.querySelectorAll(".filtro"),k=(a)=>{const b=`
    <li class="${a.completado?"completed":""}" data-id="${a.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${a.completado?"checked":""}>
            <label>${a.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Rule the web">
    </li>
    `,c=document.createElement("div");return c.innerHTML=b,f.append(c.firstElementChild),c.firstElementChild};g.addEventListener("keyup",(a)=>{if(13===a.keyCode&&0<g.value.length){const a=new e(g.value);d(a)}}),f.addEventListener("click",(a)=>{const b=a.target.localName,c=a.target.parentElement.parentElement,d=c.getAttribute("data-id");b.includes("input")?(l.marcarCompletado(d),c.classList.toggle("completed")):b.includes("button")&&(l.eliminarTodo(d),f.removeChild(c)),console.log(l)}),h.addEventListener("click",()=>{l.eliminarCompletados();for(let a=f.children.length-1;0<=a;a--){const b=f.children[a];b.classList.contains("completed")&&f.removeChild(b)}console.log(l)}),i.addEventListener("click",(a)=>{const b=a.target.text;if(b){j.forEach((a)=>a.classList.remove("selected")),a.target.classList.add("selected");for(const a of f.children){a.classList.remove("hidden");const c=a.classList.contains("completed");"Pendientes"===b?c&&a.classList.add("hidden"):"Completados"===b?c||a.classList.add("hidden"):void 0}}});const l=new class{constructor(){this.cargarLocalStorage()}nuevoTodo(a){this.todos.push(a),this.guardarLocalStorage()}eliminarTodo(a){this.todos=this.todos.filter((b)=>b.id!=a),this.guardarLocalStorage()}marcarCompletado(a){for(const b of this.todos)if(b.id==a){b.completado=!b.completado,this.guardarLocalStorage();break}}eliminarCompletados(){this.todos=this.todos.filter((a)=>!a.completado),this.guardarLocalStorage()}guardarLocalStorage(){localStorage.setItem("todo",JSON.stringify(this.todos))}cargarLocalStorage(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(e.fromJSON)}};l.todos.forEach(k);new e("aprendiendo dart");console.log("todos",l.todos)}},c={};(()=>{a.d=(b,c)=>{for(var d in c)a.o(c,d)&&!a.o(b,d)&&Object.defineProperty(b,d,{enumerable:!0,get:c[d]})}})(),(()=>{a.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b)})(),a(513)})();