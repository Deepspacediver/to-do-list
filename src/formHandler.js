import {createTodo, todoArray } from "./todoLogic"

const titleInput = document.querySelector('#todo-title')
const descriptionInput = document.querySelector('#todo-description')
const dateInput = document.querySelector('input#todo-date')
const submitButton = document.querySelector('.submit-button')

function addNewTodo(newTodo){
    todoArray.push(newTodo)
}
submitButton.addEventListener('click', ()=>{
    if(!titleInput.value || !descriptionInput.value || !dateInput.value) return;
    addNewTodo(createTodo(titleInput.value, descriptionInput.value, dateInput.value ))
    
    console.log(createTodo().originID)
    console.log(todoArray)
})