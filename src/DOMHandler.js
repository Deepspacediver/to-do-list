import { todoArray, todo, projectList, project,
     LOCAL_STORAGE_PROJECT_KEY, LOCAL_STORAGE_SELECTED_PROJECT_KEY, LOCAL_STORAGE_DEFAULT_TODOS,
     LOCAL_STORAGE_SELECTED_TODO_KEY} from "./todoLogic";

import { createTodoDiv, projectWrapper} from "./formHandler";


const listContainer = document.querySelector('[data-project-list]')
const newProjectInput = document.querySelector('[data-new-project-input]')
const projectForm = document.querySelector('[data-project-form]')
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY) || 0;
let selectedTodoId;
const defaultTodoProject = document.querySelector('.default-todo')

projectForm.addEventListener('submit', e=>{
    e.preventDefault()
    if(newProjectInput.value == null || newProjectInput.value =='') return
    
    let projectName = newProjectInput.value;
    const newProject = new project(projectName)
    projectList.push(newProject)

    clearElement(projectWrapper)
    selectedProjectId = newProject.id
    saveAndRenderList()

    newProjectInput.value =''
})

function saveAndRenderList(){
    saveList()
    renderList()
}

function saveList (){
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projectList))
    localStorage.setItem(LOCAL_STORAGE_DEFAULT_TODOS, JSON.stringify(todoArray))
    console.log(selectedProjectId, todoArray)
    localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY, selectedProjectId)
    
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
    renderTodos(selectedProjectId)
}) 


listContainer.addEventListener('click', e=>{
    console.log({todoArray})
    if(selectedProjectId == e.target.dataset.projectId) return
    selectedProjectId = e.target.dataset.projectId
    
    console.log({selectedProjectId}, projectList)
    
    saveAndRenderList()
    renderTodos(selectedProjectId)
    // clearAndRenderTodos(projectWrapper, e, selectedProjectId)
})

function findSelectedProjectInStorage(){
    let indexOfProjectInArray = projectList.findIndex(project => 
        project.id == selectedProjectId
    ) 
    console.log({indexOfProjectInArray})
    let currentProjectInStorage = projectList[indexOfProjectInArray]
    return currentProjectInStorage
}

/* function clearAndRenderTodos(wrapper, target, projectId){
    clearProjectDOM(wrapper, target)
    renderTodos(projectId)
}

function clearProjectDOM(container, target){
    if(!container || !container.firstChild || 
        target.target.dataset.projectId == selectedProjectId) return
    while(container.firstChild) {
        container.firstChild.remove()
    }
} */
// let removeTodoButtons;
function renderTodos(selectedId){
    clearElement(projectWrapper)
    let array;
    if(selectedId == 0) {
        array = todoArray
    } else array = findSelectedProjectInStorage().todos
    array.forEach(element => {
        createTodoDiv(element)
    })
    /* removeTodoButtons = document.querySelectorAll('.todo-remove-button')
    console.log(removeTodoButtons) */

}

const removeProjectButton = document.querySelector('[data-remove-project-button]')
removeProjectButton.addEventListener('click', ()=>{
    if(selectedProjectId == 0) return
    let indexOfProjectInArray = projectList.findIndex(project => 
        project.id == findSelectedProjectInStorage().id
    ) 
    selectedProjectId = 0;
    projectList.splice(indexOfProjectInArray, 1)
    saveAndRenderList()
    renderTodos(selectedProjectId)
    

})


// const todoEditButton =

  export {saveAndRenderList, selectedProjectId,
     findSelectedProjectInStorage, renderTodos, clearElement, selectedTodoId} 