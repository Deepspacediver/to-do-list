export let todoArray = []
export let projectList = [{
    name: 'workout',
    id:1
},{
    name: 'study',
    id:2
}];
export class todo{
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


    
/* export function createTodo(titleInput, descriptionInput, dateInput){
     const newTodo = new todo(titleInput, descriptionInput, dateInput)
     return newTodo;
 
}*/