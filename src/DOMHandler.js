import { todoArray, todo } from "./todoLogic";

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

    const removeTodoButton = document.createElement('button')
    removeTodoButton.dataset.id = `${todoObject.originID}`
    removeTodoButton.classList.add('todo-remove-button')
    removeTodoButton.textContent = 'Remove me'
    todoWrapper.appendChild(removeTodoButton)
    removeTodoButton.addEventListener('click', todoObject.removeTodo)
}

