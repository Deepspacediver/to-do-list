
let todoArray = []
let LOCAL_STORAGE_PROJECT_KEY  = 'todo.projects'
let projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
class todo{
    constructor(title, description, date){
        this.originID = Date.now()
        this.title = title
        this.description = description;
        this.date = date;
    }
    get id(){
        return this.originID
    }

    removeTodo(){
        let id = this.dataset.id //button.data-id
        let indexOfTodoInArray = todoArray.findIndex(object => object.originID == id)
        todoArray.splice(indexOfTodoInArray, 1)
        
        let pageElements = Array.from(document.querySelectorAll(`[data-id="${this.dataset.id}"]`))
        pageElements.forEach((element) =>{
            element.remove()
        }) 
    }

}

class project{
    constructor(name){
        this.name = name
        this.id = Date.now()
        this.todos = []
    }
}

export { todo, projectList, todoArray, project, LOCAL_STORAGE_PROJECT_KEY}


    
/* export function createTodo(titleInput, descriptionInput, dateInput){
     const newTodo = new todo(titleInput, descriptionInput, dateInput)
     return newTodo;
 
}*/