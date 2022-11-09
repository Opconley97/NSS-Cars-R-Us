import { getPaintColor } from "./database.js";

const paintColor = getPaintColor();

document.addEventListener("change", (event) => {
    if (event.target.id === "paint-menu") {
        const chosenOption = event.target.value
    }
})

export const paintSelected = () => {
    let html = "<ul>"
    const listItems = paintColor.map(paint => {
        return `<li>
        <select id="paint-menu">
            <option value="${paint.id}">${paint.color}</option>
        </li>`
    })
    html += listItems.join("")
    html += "</ul>"
    return html
}