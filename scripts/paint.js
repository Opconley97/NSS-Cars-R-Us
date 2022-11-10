import { getPaintColor , setPaint } from "./database.js";

const paintColor = getPaintColor();

document.addEventListener("change", (event) => {
    if (event.target.id === "paint-menu") {
        const chosenOption = event.target.value
        for (const paint of paintColor) {
            if (parseInt(chosenOption) === paint.id) {
                setPaint(parseInt(chosenOption))
            }
        }
    }
})

export const paintSelected = () => {
    let html = "<ul>"
    html += `<select id="paint-menu">`
    html += `<option value="0">Select Paint</option>`
    const listItems = paintColor.map(paint => {
        return `<li>
            <option value="${paint.id}">${paint.color}</option>
        </li>`
    })
    html += listItems.join("")
    html += "</select>"
    html += "</ul>"
    return html
}