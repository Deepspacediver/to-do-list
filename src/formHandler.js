import {todoArray, todo, projectList, project } from "./todoLogic"
import {selectedProjectId, saveAndRenderList,
     findSelectedProjectInStorage, renderTodos, clearElement} from "./DOMHandler"

const titleInput = document.querySelector('#todo-title')
const descriptionInput = document.querySelector('#todo-description')
const dateInput = document.querySelector('input#todo-date')
const submitButton = document.querySelector('.submit-button')

const openFormButtons = document.querySelectorAll('[data-form-target]')
const closeFormButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
export const projectWrapper = document.querySelector('.project-wrapper')

submitButton.addEventListener('click', (e)=>{
    if(!titleInput.value || !descriptionInput.value ||
         !dateInput.value) return;
         const newTodo = new todo(selectedProjectId,titleInput.value, descriptionInput.value,
             dateInput.value) 
         
         clearElement(projectWrapper)
         addNewTodo(todoArray, newTodo)
         saveAndRenderList()
         renderTodos(selectedProjectId)
         clearForm(submitButton)
         closeForm(e.target.closest('.todo-form-container'))
    
})


openFormButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        const form = document.querySelector(button.dataset.formTarget)
        openForm(form)
    })
})

closeFormButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        const form = button.closest('.todo-form-container')
        closeForm(form)
    })
})

function openForm(form){
    if (form == null) return
    form.classList.add('active')
    overlay.classList.add('active')
}

function closeForm(form){
    if (form == null) return
    form.classList.remove('active')
    overlay.classList.remove('active')
}

function addNewTodo(defaultArray, newTodo){
        if(selectedProjectId == 0) defaultArray.push(newTodo)
        else {
            findSelectedProjectInStorage().todos.push(newTodo)
            console.log(projectList)
        }
}


function clearForm(button){
    const inputContainers = Array.from(button.closest('div').querySelector('fieldset').children)
    inputContainers.forEach((div) => {
        Array.from(div.querySelectorAll('input')).forEach((input) =>{ //Collects all input within all divs
            input.value = ''
        })
    })
}

function createTodoDiv(todoObject){
    
    const todoWrapper = document.createElement('div')
    todoWrapper.dataset.todoId = `${todoObject.originID}`
    todoWrapper.classList.add('todo-wrapper')
    projectWrapper.insertBefore(todoWrapper, projectWrapper.firstChild)

    const todoTitle = document.createElement('div')
    todoTitle.dataset.todoId = `${todoObject.originID}`;
    todoTitle.classList.add('todo-title')
    todoTitle.textContent = `${todoObject.title}`
    todoWrapper.appendChild(todoTitle)

    const todoDescription = document.createElement('div')
    todoDescription.dataset.todoId = `${todoObject.originID}`;
    todoDescription.classList.add('todo-descritpion')
    todoDescription.textContent = `${todoObject.description}`
    todoWrapper.appendChild(todoDescription)

    const todoDate = document.createElement('div')
    todoDate.dataset.todoId = `${todoObject.originID}`;
    todoDate.classList.add('todo-date')
    todoDate.textContent = `${todoObject.date}`
    todoWrapper.appendChild(todoDate)

    const removeTodoButton = document.createElement('button')
    removeTodoButton.dataset.todoId = `${todoObject.originID}`
    removeTodoButton.classList.add('todo-remove-button')
    removeTodoButton.textContent = 'Remove me'
    todoWrapper.appendChild(removeTodoButton)
    // removeTodoButton.addEventListener('click', todoObject.removeTodo(todoArray))
}
export {titleInput, descriptionInput, dateInput, submitButton, createTodoDiv}