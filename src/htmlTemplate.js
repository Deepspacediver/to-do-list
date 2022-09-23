// import { submitButton } from "./formHandler";

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

            const addTodoButton = document.createElement('button')
            addTodoButton.classList.add('add-todo-button')
            addTodoButton.dataset.formTarget= '.todo-form-container'
            addTodoButton.textContent = 'new todo'
            bodyContent.appendChild(addTodoButton)
        })();
    })();

    const populateNavBar = (() => {
        const projectForm = document.createElement('form')
        projectForm.classList.add('project-form')
        document.querySelector('.nav-bar-content').appendChild(projectForm)
        const newProjectInput = document.createElement('input')
        newProjectInput.classList.add('new-project-input')
        newProjectInput.type = 'text'
        newProjectInput.placeholder = 'new Project'
        projectForm.appendChild(newProjectInput)
        

        const projectList = document.createElement('ul')
        projectList.classList.add('project-list')
        document.querySelector('.nav-bar-content').appendChild(projectList)
    
        
        const todoItemList = document.createElement('li')
        todoItemList.classList.add('todo')
        todoItemList.textContent = "Today's Todos"
        projectList.appendChild(todoItemList)
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

