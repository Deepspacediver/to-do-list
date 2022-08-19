export function createHTMLTemplate(){
    const body = document.querySelector('body')
    const heading = document.createElement('div')
    heading.classList.add('heading')

    const content = document.createElement('div')
    content.classList.add('content')

    const footer = document.createElement('div')
    footer.classList.add('footer')

    body.appendChild(heading)
    body.appendChild(content)
    body.appendChild(footer)
}

export function createContentTemplate(){
    const content = document.querySelector('div.content')

    const navBar = document.createElement('div')
    navBar.classList.add('nav-bar-content')

    const bodyContent = document.createElement('div')
    bodyContent.classList.add('body-content')

    content.appendChild(navBar)
    content.appendChild(bodyContent)
}