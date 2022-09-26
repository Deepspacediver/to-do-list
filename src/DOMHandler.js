import { todoArray, todo, projectList, project,
     LOCAL_STORAGE_PROJECT_KEY, LOCAL_STORAGE_SELECTED_PROJECT_KEY, LOCAL_STORAGE_DEFAULT_TODOS,
    } from "./todoLogic";

import { createTodoDiv, projectWrapper} from "./formHandler";

function getFirstChild(){
    let firstChild = document.querySelector('div.body-content').firstChild
    return firstChild;
}

 
const listContainer = document.querySelector('[data-project-list]')
const newProjectInput = document.querySelector('[data-new-project-input]')
const projectForm = document.querySelector('[data-project-form]')
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY) || 0;
const defaultTodoProject = document.querySelector('.default-todo')

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
    localStorage.setItem(LOCAL_STORAGE_DEFAULT_TODOS, JSON.stringify(todoArray))
    console.log(selectedProjectId, todoArray)
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
    clearElement(document.querySelector('.project-wrapper'))
}

export function clearElement(element){
    while(element.firstChild){
        element.firstChild.remove()
    }
}

defaultTodoProject.addEventListener('click', e=>{
    if(e.target.classList.contains('selected')) return
    selectedProjectId = e.target.dataset.projectId
    saveAndRenderList()
    clearAndRender(projectWrapper, e, selectedProjectId)
}) 


listContainer.addEventListener('click', e=>{
    console.log({todoArray})
    if(selectedProjectId == e.target.dataset.projectId) return
    selectedProjectId = e.target.dataset.projectId
    console.log({selectedProjectId}, projectList)
    // generateProjectDOM(findSelectedProjectInStorage())
    saveAndRenderList()
    clearAndRender(projectWrapper, e, selectedProjectId)
})

function findSelectedProjectInStorage(){
    let indexOfProjectInArray = projectList.findIndex(project => 
        project.id == selectedProjectId
    )
    console.log(indexOfProjectInArray)
    let currentProjectInStorage = projectList[indexOfProjectInArray]
    return currentProjectInStorage
}

function clearAndRender(wrapper, target, projectId){
    clearProjectDOM(wrapper, target)
    renderTodos(projectId)

}
function clearProjectDOM(container, target){
    if(!container || !container.firstChild || 
        target.target.dataset.projectId == selectedProjectId) return
    while(container.firstChild) {
        container.firstChild.remove()
        console.log('removed')
    }
}
function renderTodos(selectedId){
    let array;
    if(selectedId == 0) {
        array = todoArray
    } else array = findSelectedProjectInStorage().todos

    array.forEach(element => {
        createTodoDiv(element)
    })

}

  export {saveAndRenderList, selectedProjectId,
     findSelectedProjectInStorage, renderTodos} 