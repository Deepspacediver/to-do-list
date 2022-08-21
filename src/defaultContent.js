function createNewTodoButton(){
    const bodyContent = document.querySelector('.body-content')

    const newTodoButton = document.createElement('button')
    newTodoButton.classList.add('create-todo-button')
    newTodoButton.type ='button'
    newTodoButton.textContent= 'Add todo'
    bodyContent.appendChild(newTodoButton)
}

/* function createInputForTodo(){
    const inputWrapper = document.createElement('div')
    inputWrapper.classList.add('input-wrapper')
    document.querySelector('.body-content').appendChild(inputWrapper)

    const inputForTodo = document.createElement('input')
    inputForTodo.type='text'
    inputWrapper.appendChild(inputForTodo)

    const confirmButtonTodo = document.createElement('button')
    confirmButtonTodo.classList.add('confirm-button')
    confirmButtonTodo.textContent = 'Add'

    const cancelButtonTodo = document.createElement('button')
    cancelButtonTodo.classList.add('cancel-button')
    cancelButtonTodo.textContent = 'Cancel'
}


function checkForExistingButton(){
    if (document.querySelector('.create-todo-button') != null){
        document.querySelector('.create-todo-button').addEventListener('click',createInputForTodo())
    }else {console.log('none')}
}

 */