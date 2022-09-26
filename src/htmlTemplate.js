// import { submitButton } from "./formHandler";

import { project } from "./todoLogic";

export const createHTMLTemplate = (() => {
    const body = document.querySelector('body')

    const createHeader = (() => {
        const heading = document.createElement('div')
        heading.classList.add('heading')
        body.appendChild(heading)
    })();
    
    const populateHeader = (() => {
        const title = document.createElement('div')
        title.classList.add('title-header')
        title.textContent = "Todo list"
    
        document.querySelector('.heading').appendChild(title)
    })()

    const createContent = (() => {
        const content = document.createElement('div')
        content.classList.add('content')
        body.appendChild(content)
        
        const populateContent = (() => {
            const navBar = document.createElement('div')
            navBar.classList.add('nav-bar-content')
            content.appendChild(navBar)

            const bodyContent = document.createElement('div')
            bodyContent.classList.add('body-content')
            content.appendChild(bodyContent)

            const projectWrapper = document.createElement('div')
            projectWrapper.classList.add('project-wrapper')
            bodyContent.appendChild(projectWrapper)

            const addTodoButton = document.createElement('button')
            addTodoButton.classList.add('add-todo-button')
            addTodoButton.dataset.formTarget= '.todo-form-container'
            addTodoButton.textContent = 'new todo'
            bodyContent.appendChild(addTodoButton)
        })();
    })();

    const populateNavBar = (() => {

        const projectForm = document.createElement('form')
        projectForm.dataset.projectForm ='';
        document.querySelector('.nav-bar-content').appendChild(projectForm)
        
        const newProjectInput = document.createElement('input')
        newProjectInput.dataset.newProjectInput =''
        newProjectInput.type = 'text'
        newProjectInput.placeholder = 'new Project'
        projectForm.appendChild(newProjectInput)
    
        const defaultProject = document.createElement('div')
        defaultProject.classList.add('default-todo')
        defaultProject.classList.add('project-title')
        defaultProject.dataset.projectId = `${0}`
        defaultProject.textContent = "Today's Todos"
        document.querySelector('.nav-bar-content').appendChild(defaultProject)

        const projectList = document.createElement('ul')
        projectList.classList.add('project-list')
        projectList.dataset.projectList =''
        document.querySelector('.nav-bar-content').appendChild(projectList)
    })();

    const createFooter = (() =>{
        const footer = document.createElement('div')
        footer.classList.add('footer')
        body.appendChild(footer)

        const populateFooter= (() =>{
            const footerTitle = document.createElement('div')
            footerTitle.classList.add('footer-title')
            footerTitle.textContent ='Made by Deepspacediver'
        
            document.querySelector('.footer').appendChild(footerTitle)
        })()
    })();
})();

function generateProjectDOM(projectId){
    clearProjectDOM(document.querySelector('.project-container'))
    /* const projectTodoContainer = document.createElement('div')
    projectTodoContainer.dataset.projectId = `${selectedProject.id}`
    projectTodoContainer.classList.add('project-container')

    
    document.querySelector('.body-content').appendChild(projectTodoContainer)

    selectedProject.todos.forEach(todo => {
        const todoContainer = document.createElement('ul')
        todoContainer.classList.add('todo-container')
        todoContainer.dataset.projectId = `${selectedProject.id}`
        todoContainer.dataset.originID = `${todo.originID}`
        todoContainer.innerText ='yoooo'
        projectTodoContainer.appendChild(todoContainer)
    }) */
}
function clearProjectDOM(container){
    if(!container || !container.firstChild) return
    while(container.firstChild) {
        container.firstChild.remove()
        console.log('removed')
    }
    container.remove()
}
export {generateProjectDOM}