import { todoArray, todo, projectList, project,
     LOCAL_STORAGE_PROJECT_KEY, LOCAL_STORAGE_SELECTED_PROJECT_KEY,
    } from "./todoLogic";


// const bodyContent = document.querySelector('.body-content')

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

function getFirstChild(){
    let firstChild = document.querySelector('div.body-content').firstChild
    return firstChild;
}

 
const listContainer = document.querySelector('[data-project-list]')
const newProjectInput = document.querySelector('[data-new-project-input]')
const projectForm = document.querySelector('[data-project-form]')
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY)
const defaultTodoProject = document.querySelector('.default-todo')
const projectWrapper = document.querySelector('.project-wrapper')

projectForm.addEventListener('submit', e=>{
    e.preventDefault()
    if(newProjectInput.value == null || newProjectInput.value =='') return
    
    let projectName = newProjectInput.value;
    const newProject = new project(projectName)
    projectList.push(newProject)
    saveAndRenderList()
    newProjectInput.value =''
})

function saveAndRenderList(){
    saveList()
    renderList()
}

function saveList (){
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projectList))
    console.log(selectedProjectId)
    /* if(localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY) === null ||
    localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY) == 0){
        localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY,
             defaultTodoProject.dataset.projectId)
    }else {  */
        localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY, selectedProjectId)
    // }
}
function renderList(){
    clearElement(listContainer)
    if(selectedProjectId == 0) defaultTodoProject.classList.add('selected')
    projectList.forEach(project =>{
        const projectElement = document.createElement('li')
        projectElement.classList.add('project-title')
        projectElement.dataset.projectId = project.id
        projectElement.innerText = project.name
        if(project.id == selectedProjectId){
            defaultTodoProject.classList.remove('selected')
            projectElement.classList.add('selected')
        }
        listContainer.appendChild(projectElement)
    })
}

function clearElement(element){
    while(element.firstChild){
        element.firstChild.remove()
    }
}

defaultTodoProject.addEventListener('click', e=>{
    if(e.target.classList.contains('selected')) return
    selectedProjectId = e.target.dataset.projectId
    saveAndRenderList()
}) 

function removeSelectedClass(){
    let previouslySelectedElement = document.querySelector('.selected')
    previouslySelectedElement.classList.remove('selected')
}

listContainer.addEventListener('click', e=>{
    selectedProjectId = e.target.dataset.projectId
    console.log({selectedProjectId}, projectList)
    // generateProjectDOM(findSelectedProjectInStorage())
    saveAndRenderList()
})

function findSelectedProjectInStorage(){
    let indexOfProjectInArray = projectList.findIndex(project => 
        project.id == selectedProjectId
    )
    console.log(indexOfProjectInArray)
    let currentProjectInStorage = projectList[indexOfProjectInArray]
    return currentProjectInStorage
}

function generateProjectDOM(projectId){
    
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
function clearProjectDOM(container, target){
    if(!container || !container.firstChild || 
        target.target.dataset.projectId == selectedProjectId) return
    while(container.firstChild) {
        container.firstChild.remove()
        console.log('removed')
    }
}

/* function addTodoToSelectedProject(target){
    let selectedProjectID = target.dataset.projectId;
    console.log(selectedProjectID)
    for (let i in localStorage) {
        let projectObject = JSON.parse(localStorage.getItem(i))

    }
} */
  export {saveAndRenderList, selectedProjectId,
     findSelectedProjectInStorage,} 