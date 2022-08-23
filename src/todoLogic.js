export let todoArray = []
class todo{
    constructor(title, description, date){
        this.orignID = Date.now()
        this.title = title
        this.description = description;
        this.date = date;
    }
}
    
export function createTodo(titleInput, descriptionInput, dateInput){
     const newTodo = new todo(titleInput, descriptionInput, dateInput)
     return newTodo;

}