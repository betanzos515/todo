export class Todo{
    
    //vamos a crear un metodo para transformar un objeto a un Todo.
    static fromJSON( {tarea,id,completado,creado} ){
        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado; 
        
        return tempTodo;
    }
    constructor( tarea ){
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
    
}