import {todoArray, todo, projectList, project } from "./todoLogic"
import { createTodoDiv, selectedProjectId, saveAndRenderList} from "./DOMHandler"

const titleInput = document.querySelector('#todo-title')
const descriptionInput = document.querySelector('#todo-description')
const dateInput = document.querySelector('input#todo-date')
const submitButton = document.querySelector('.submit-button')

const openFormButtons = document.querySelectorAll('[data-form-target]')
const closeFormButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

submitButton.addEventListener('click', (e)=>{
    if(!titleInput.value || !descriptionInput.value ||
         !dateInput.value) return;
         const newTodo = new todo(selectedProjectId,titleInput.value, descriptionInput.value,
             dateInput.value) 
             console.log(newTodo) 
         addNewTodo(todoArray, newTodo)
         createTodoDiv(newTodo)  
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
function addNewTodo(array,newTodo){
    array.push(newTodo)
    let indexOfProjectInArray = projectList.findIndex(project => 
        project.id == selectedProjectId
    )
    console.log(indexOfProjectInArray)
    let currentProjectInStorage = projectList[indexOfProjectInArray]
    currentProjectInStorage.todos.push(newTodo)
    saveAndRenderList()
    console.log(projectList)
}
function clearForm(button){
    const inputContainers = Array.from(button.closest('div').querySelector('fieldset').children)
    inputContainers.forEach((div) => {
        Array.from(div.querySelectorAll('input')).forEach((input) =>{ //Collects all input within all divs
            input.value = ''
        })
    })
}
export {titleInput, descriptionInput, dateInput, submitButton}