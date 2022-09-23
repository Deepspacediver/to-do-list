import { todoArray, todo, projectList, project, LOCAL_STORAGE_PROJECT_KEY} from "./todoLogic";

const bodyContent = document.querySelector('.body-content')

export function createTodoDiv(todoObject){
    
    const todoWrapper = document.createElement('div')
    todoWrapper.dataset.id = `${todoObject.originID}`
    todoWrapper.classList.add('todo-wrapper')
    bodyContent.insertBefore(todoWrapper, bodyContent.firstChild)

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

function getFirstChild(){
    let firstChild = document.querySelector('div.body-content').firstChild
    return firstChild;
}

 
const listContainer = document.querySelector('[data-project-list]')
const newProjectInput = document.querySelector('[data-new-project-input]')
const projectForm = document.querySelector('[data-project-form]')



projectForm.addEventListener('submit', e=>{
    e.preventDefault()
    if(newProjectInput.value == null || newProjectInput.value =='') return
   let projectName = newProjectInput.value;
    const newProject = new project(projectName)
    projectList.push(newProject)
    console.log(projectList)
    saveAndRenderList()
    console.log(localStorage)
    newProjectInput.value =''
})

function saveAndRenderList(){
    saveList()
    renderList()
}
function saveList (){
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projectList))
}
export function renderList(){
    clearElement(listContainer)
    projectList.forEach(project =>{
        const projectElement = document.createElement('li')
        projectElement.classList.add('project-title')
        projectElement.dataset.projectId = project.id
        projectElement.innerText = project.name
        listContainer.appendChild(projectElement)
    })
}

function clearElement(element){
    while(element.firstChild){
        element.firstChild.remove()
    }
}
// renderList(); 