
import "./htmlTemplate"
import "./DOMHandler"
import "./main.css"
import "./formHandler"
import { renderTodos, saveAndRenderList, selectedProjectId } from "./DOMHandler"
window.addEventListener('load', saveAndRenderList())
window.addEventListener('load', renderTodos(selectedProjectId))
