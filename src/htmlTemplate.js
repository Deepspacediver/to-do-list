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
        })();
    })();

    const populateNavBar = (() => {
        const navBarList = document.createElement('ul')
        navBarList.classList.add('nav-list')
        document.querySelector('.nav-bar-content').appendChild(navBarList)
    
        const todoItemList = document.createElement('li')
        todoItemList.classList.add('todo')
        todoItemList.textContent = "Today's Todos"
        navBarList.appendChild(todoItemList)
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
