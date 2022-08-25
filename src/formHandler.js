import {todoArray, todo } from "./todoLogic"
import { createTodoDiv } from "./DOMHandler"

const titleInput = document.querySelector('#todo-title')
const descriptionInput = document.querySelector('#todo-description')
const dateInput = document.querySelector('input#todo-date')
const submitButton = document.querySelector('.submit-button')

function addNewTodo(array,newTodo){
    array.push(newTodo)
}
submitButton.addEventListener('click', ()=>{
    if(!titleInput.value || !descriptionInput.value ||
         !dateInput.value) return;
         const newTodo = new todo(titleInput.value, descriptionInput.value, dateInput.value)  
         addNewTodo(todoArray, newTodo)
         createTodoDiv(newTodo)  
    
})
export {titleInput, descriptionInput, dateInput, submitButton}