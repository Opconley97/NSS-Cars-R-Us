import { getWheels , setWheels } from "./database.js"

const wheels = getWheels();

document.addEventListener("change",(event) => {
    if(event.target.id === "wheels-menu") {
        const chosenOption = event.target.value
        for(const wheel of wheels) {
            if (parseInt(chosenOption) === wheel.id) {
                setWheels(parseInt(chosenOption))
            }
        }
    }
})

export const wheelsSelected = () => {
    let html = "<ul>"
    html += `<select id="wheels-menu">`
    html += `<option value="0">Select Wheels</option>`
    const listItems = wheels.map(wheel => {
        return `<li>
            <option value="${wheel.id}">${wheel.style}</option>
            </li>`
    })
    html += listItems.join("")
    html += "</select>"
    html += "</ul>"
    return html
}