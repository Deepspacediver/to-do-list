let LOCAL_STORAGE_DEFAULT_TODOS = "todo.defaultArray";
let todoArray =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_DEFAULT_TODOS)) || [];
let LOCAL_STORAGE_PROJECT_KEY = "todo.projects";
let LOCAL_STORAGE_SELECTED_PROJECT_KEY = "todo.selectedProjectId";
let projectList =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
let LOCAL_STORAGE_SELECTED_TODO_KEY = "todo.selectedTodoId";
class todo {
  constructor(projectId, title, description, date) {
    this.originID = Date.now();
    this.projectId = projectId;
    this.title = title;
    this.description = description;
    this.date = date;
  }
}

class project {
  constructor(name) {
    this.name = name;
    this.id = Date.now();
    this.todos = [];
  }
}

export {
  todo,
  projectList,
  todoArray,
  project,
  LOCAL_STORAGE_PROJECT_KEY,
  LOCAL_STORAGE_SELECTED_PROJECT_KEY,
  LOCAL_STORAGE_DEFAULT_TODOS,
  LOCAL_STORAGE_SELECTED_TODO_KEY,
};
