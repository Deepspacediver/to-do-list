To-do list project from TOP. 




Create todo-list with class
    it has title, description, duedate

button user creates new todo object
    that object is stored within local storage


changed html template directory and removed imports/exports BUT NEEDS MORE KNMOWLEDGE


when user creates project > container for todoiscreated

when user submits todo it checks for current selectedProject and pushes
    todo into a todos array (if not object is selected it pushes it to the default "todays todos")


userSelectsPProject
    project becomes 'selected'
    function searches for specific project inside projectList
    function generates container for the project and li elements
         from project.todos array  