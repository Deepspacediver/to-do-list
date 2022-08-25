export let todoArray = []
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
}
    
/* export function createTodo(titleInput, descriptionInput, dateInput){
     const newTodo = new todo(titleInput, descriptionInput, dateInput)
     return newTodo;
 
}*/