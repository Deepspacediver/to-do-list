import { todoArray } from "./todoLogic";

const bodyContent = document.querySelector('.body-content')

export function createTodoDiv(todoObject){
    const todoWrapper = document.createElement('div')
    todoWrapper.dataset.id = `${todoObject.originID}`
    todoWrapper.classList.add('todo-wrapper')
    bodyContent.appendChild(todoWrapper)

    const todoTitle = document.createElement('div')
    todoTitle.dataset.id = `${todoObject.originID}`;
    todoTitle.classList.add('todo-title')
    todoTitle.textContent = `${todoObject.title}`
    todoWrapper.appendChild(todoTitle)

    const todoDescription = document.createElement('div')
    todoDescription.dataset.id = `${todoObject.originID}`;
    todoDescription.classList.add('todo-descritpion')
    todoDescription.textContent = `${todoObject.description}`
    todoWrapper.appendChild(todoDescription)

    const todoDate = document.createElement('div')
    todoDate.dataset.id = `${todoObject.originID}`;
    todoDate.classList.add('todo-date')
    todoDate.textContent = `${todoObject.date}`
    todoWrapper.appendChild(todoDate)
}

const openFormButtons = document.querySelectorAll('[data-form-target]')
const closeFormButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
console.log(openFormButtons)

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